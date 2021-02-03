import { Matrix3, MultiplyMatrix3Vector3, Vector3 } from './LinearAlgebra'

export const lrgbToXyz = (srgb: Vector3): Vector3 =>
  MultiplyMatrix3Vector3(LRGB_TO_XYZ_MATRIX, srgb)

export const xyzToLrgb = (xyz: Vector3): Vector3 =>
  MultiplyMatrix3Vector3(XYZ_TO_LRGB_MATRIX, xyz)

const LRGB_TO_XYZ_MATRIX: Matrix3 = [
  0.4124564,
  0.3575761,
  0.1804375,
  0.2126729,
  0.7151522,
  0.072175,
  0.0193339,
  0.119192,
  0.9503041,
]

const XYZ_TO_LRGB_MATRIX: Matrix3 = [
  3.2404542,
  -1.5371385,
  -0.4985314,
  -0.969266,
  1.8760108,
  0.041556,
  0.0556434,
  -0.2040259,
  1.0572252,
]
