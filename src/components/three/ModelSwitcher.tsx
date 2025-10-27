import { PresentationControls } from "@react-three/drei";
import { useRef, type FC } from "react";
import { Group, Mesh, Material, Object3D } from "three";
import MacBookModel16 from "../models/Macbook-16";
import MacBookModel14 from "../models/Macbook-14";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

const fadeMeshes = (
  group: InstanceType<typeof Group> | undefined,
  opacity: number
): void => {
  if (!group) return;

  group.traverse((child: InstanceType<typeof Object3D>) => {
    if ((child as InstanceType<typeof Mesh>).isMesh) {
      const mesh = child as InstanceType<typeof Mesh>;
      if (mesh.material) {
        const material = mesh.material as InstanceType<typeof Material> & {
          transparent?: boolean;
          opacity?: number;
        };
        material.transparent = true;
        gsap.to(material, { opacity, duration: ANIMATION_DURATION });
      }
    }
  });
};

const moveGroup = (
  group: InstanceType<typeof Group> | undefined,
  x: number
): void => {
  if (!group) return;

  gsap.to(group.position, { x, duration: ANIMATION_DURATION });
};

interface ModelSwitcherProps {
  scale: number;
  isMobile: boolean;
}

export const ModelSwitcher: FC<ModelSwitcherProps> = ({ scale, isMobile }) => {
  const SCALE_LARGE_DESKTOP = 0.08;
  const SCALE_LARGE_MOBILE = 0.05;
  const smallMacBookRef = useRef<InstanceType<typeof Group>>(null);
  const largeMacBookRef = useRef<InstanceType<typeof Group>>(null);

  const showLargeMacBook: boolean =
    scale === SCALE_LARGE_DESKTOP || scale === SCALE_LARGE_MOBILE;

  useGSAP(() => {
    if (showLargeMacBook) {
      moveGroup(smallMacBookRef.current ?? undefined, -OFFSET_DISTANCE);
      moveGroup(largeMacBookRef.current ?? undefined, 0);

      fadeMeshes(smallMacBookRef.current ?? undefined, 0);
      fadeMeshes(largeMacBookRef.current ?? undefined, 1);
    } else {
      moveGroup(smallMacBookRef.current ?? undefined, 0);
      moveGroup(largeMacBookRef.current ?? undefined, OFFSET_DISTANCE);

      fadeMeshes(smallMacBookRef.current ?? undefined, 1);
      fadeMeshes(largeMacBookRef.current ?? undefined, 0);
    }
  }, [scale, showLargeMacBook]);

  const controlsConfig = {
    snap: true,
    speed: 1,
    zoom: 1,
    polar: [-Math.PI, Math.PI] as [number, number],
    config: { mass: 1, tension: 0, friction: 26 },
  };

  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={largeMacBookRef}>
          <MacBookModel16 scale={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>

      <PresentationControls {...controlsConfig}>
        <group ref={smallMacBookRef}>
          <MacBookModel14 scale={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls>
    </>
  );
};
