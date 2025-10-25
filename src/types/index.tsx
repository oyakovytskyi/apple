import { Mesh, Material } from "three";
import type { GLTF } from "three-stdlib";

export interface GLTFResult extends GLTF {
  nodes: Record<string, InstanceType<typeof Mesh>>;
  materials: Record<string, InstanceType<typeof Material>>;
}

export type NavLink = {
  label: string;
  href: string;
};