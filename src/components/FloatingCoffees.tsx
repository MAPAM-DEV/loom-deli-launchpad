import { useEffect, useState, useRef } from "react";
import coffeeIcon from "@/assets/coffee-icon.png";

// Configuration for floating coffee animations
export const COFFEE_CONFIG = {
  // Number of coffee icons in the pool
  poolSize: 8,
  // Size range in pixels [min, max]
  sizeRange: [40, 80] as [number, number],
  // Speed range in pixels per frame [min, max]
  speedRange: [0.5, 1.5] as [number, number],
  // Spawn interval in ms (how often a new coffee enters)
  spawnInterval: 2000,
  // Opacity range [min, max]
  opacityRange: [0.15, 0.35] as [number, number],
  // Rotation range in degrees [min, max]
  rotationRange: [-30, 30] as [number, number],
};

interface CoffeeInstance {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  rotation: number;
  active: boolean;
}

const FloatingCoffees = () => {
  const [coffees, setCoffees] = useState<CoffeeInstance[]>([]);
  const animationRef = useRef<number>();
  const lastSpawnRef = useRef<number>(0);

  const randomInRange = (min: number, max: number) => 
    Math.random() * (max - min) + min;

  const createCoffee = (id: number): CoffeeInstance => {
    const size = randomInRange(...COFFEE_CONFIG.sizeRange);
    return {
      id,
      x: randomInRange(-200, -50),
      y: randomInRange(-200, -50),
      size,
      speed: randomInRange(...COFFEE_CONFIG.speedRange),
      opacity: randomInRange(...COFFEE_CONFIG.opacityRange),
      rotation: randomInRange(...COFFEE_CONFIG.rotationRange),
      active: true,
    };
  };

  const resetCoffee = (coffee: CoffeeInstance): CoffeeInstance => {
    const size = randomInRange(...COFFEE_CONFIG.sizeRange);
    return {
      ...coffee,
      x: randomInRange(-200, -50),
      y: randomInRange(-200, -50),
      size,
      speed: randomInRange(...COFFEE_CONFIG.speedRange),
      opacity: randomInRange(...COFFEE_CONFIG.opacityRange),
      rotation: randomInRange(...COFFEE_CONFIG.rotationRange),
      active: true,
    };
  };

  useEffect(() => {
    // Initialize pool
    const initialPool: CoffeeInstance[] = [];
    for (let i = 0; i < COFFEE_CONFIG.poolSize; i++) {
      const coffee = createCoffee(i);
      coffee.active = i < 3; // Start with a few active
      if (coffee.active) {
        coffee.x = randomInRange(0, window.innerWidth);
        coffee.y = randomInRange(0, window.innerHeight);
      }
      initialPool.push(coffee);
    }
    setCoffees(initialPool);

    const animate = (timestamp: number) => {
      setCoffees(prev => {
        const updated = prev.map(coffee => {
          if (!coffee.active) return coffee;

          const newX = coffee.x + coffee.speed;
          const newY = coffee.y + coffee.speed;

          // Check if off screen (bottom-right)
          if (newX > window.innerWidth + 100 || newY > window.innerHeight + 100) {
            return { ...coffee, active: false };
          }

          return { ...coffee, x: newX, y: newY };
        });

        // Spawn new coffee if interval passed
        if (timestamp - lastSpawnRef.current > COFFEE_CONFIG.spawnInterval) {
          const inactive = updated.find(c => !c.active);
          if (inactive) {
            const idx = updated.findIndex(c => c.id === inactive.id);
            updated[idx] = resetCoffee(inactive);
            lastSpawnRef.current = timestamp;
          }
        }

        return updated;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {coffees.map(coffee => (
        coffee.active && (
          <img
            key={coffee.id}
            src={coffeeIcon}
            alt=""
            className="absolute"
            style={{
              width: coffee.size,
              height: coffee.size,
              left: coffee.x,
              top: coffee.y,
              opacity: coffee.opacity,
              transform: `rotate(${coffee.rotation}deg)`,
              transition: "none",
            }}
          />
        )
      ))}
    </div>
  );
};

export default FloatingCoffees;
