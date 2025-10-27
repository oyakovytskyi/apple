import { Environment, Lightformer } from "@react-three/drei";
import type { FC } from "react";

export const StudioLights: FC = () => {
  return (
    <group name="lights">
      <Environment resolution={256}>
        <group>
          <Lightformer form="rect" intensity={10} position={[-15, 5, -5]} scale={10} />
        </group>
      </Environment>
      <spotLight position={[-2, 10, 5]} angle={0.15} decay={0} intensity={Math.PI * 0.2} />
      <spotLight position={[0, -25, 10]} angle={0.15} decay={0} intensity={Math.PI * 0.2} />
      <spotLight position={[0, 15, 5]} angle={0.15} decay={0} intensity={Math.PI * 1} />
    </group>
  );
};
