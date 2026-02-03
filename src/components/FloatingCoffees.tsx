import { useEffect, useState, useRef } from "react";
import coffeeIcon from "@/assets/coffee-icon.png";

// Configuration for floating coffee animations
export const COFFEE_CONFIG = {
  // Number of coffee icons in the pool
  poolSize: 30,
  // Fraction of pool to spawn immediately on load
  initialSpawnRatio: 0.2,
  // Size multiplier relative to viewport (percentage of smaller dimension)
  sizeMultiplierRange: [0.08, 0.15] as [number, number],
  // Speed range in pixels per frame [min, max]
  speedRange: [0.5, 1.5] as [number, number],
  // Spawn interval in ms (how often a new coffee enters)
  spawnInterval: 1500,
  // Opacity range [min, max]
  opacityRange: [0.4, 0.6] as [number, number],
  // Rotation range in degrees [min, max]
  rotationRange: [-30, 30] as [number, number],
};

// Calculate responsive size based on viewport
const getResponsiveSize = () => {
  const baseSize = Math.min(window.innerWidth, window.innerHeight);
  const [minMult, maxMult] = COFFEE_CONFIG.sizeMultiplierRange;
  return [baseSize * minMult, baseSize * maxMult] as [number, number];
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

  // Spawn from either top edge (random X) or left edge (random Y)
  const getSpawnPosition = () => {
    const spawnFromTop = Math.random() > 0.5;
    if (spawnFromTop) {
      // Spawn above screen, random X position
      return {
        x: randomInRange(0, window.innerWidth),
        y: randomInRange(-150, -50),
      };
    } else {
      // Spawn left of screen, random Y position
      return {
        x: randomInRange(-150, -50),
        y: randomInRange(0, window.innerHeight),
      };
    }
  };

  const createCoffee = (id: number, onScreen = false): CoffeeInstance => {
    const size = randomInRange(...getResponsiveSize());
    const pos = onScreen 
      ? { x: randomInRange(0, window.innerWidth), y: randomInRange(0, window.innerHeight) }
      : getSpawnPosition();
    return {
      id,
      x: pos.x,
      y: pos.y,
      size,
      speed: randomInRange(...COFFEE_CONFIG.speedRange),
      opacity: randomInRange(...COFFEE_CONFIG.opacityRange),
      rotation: randomInRange(...COFFEE_CONFIG.rotationRange),
      active: true,
    };
  };

  const resetCoffee = (coffee: CoffeeInstance): CoffeeInstance => {
    const size = randomInRange(...getResponsiveSize());
    const pos = getSpawnPosition();
    return {
      ...coffee,
      x: pos.x,
      y: pos.y,
      size,
      speed: randomInRange(...COFFEE_CONFIG.speedRange),
      opacity: randomInRange(...COFFEE_CONFIG.opacityRange),
      rotation: randomInRange(...COFFEE_CONFIG.rotationRange),
      active: true,
    };
  };

  useEffect(() => {
    // Initialize pool - spawn initial batch on screen based on ratio
    const initialPool: CoffeeInstance[] = [];
    const initialCount = Math.floor(COFFEE_CONFIG.poolSize * COFFEE_CONFIG.initialSpawnRatio);
    for (let i = 0; i < COFFEE_CONFIG.poolSize; i++) {
      const onScreen = i < initialCount;
      const coffee = createCoffee(i, onScreen);
      coffee.active = onScreen;
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
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
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
            }}
          />
        )
      ))}
    </div>
  );
};

export default FloatingCoffees;
