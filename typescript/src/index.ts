import { lrgbToXyz, xyzToLrgb } from './Color'
import { Vector3 } from './LinearAlgebra'

export const ColorSpaceManipulation = {
  make: (width: number, height: number) => {
    const array: Vector3[] = []
    for (let i = 0; i < width; i++)
      for (let j = 0; j < height; j++)
        array.push([(i % 10) / 10, (j % 10) / 10, ((i + j) % 10) / 10])
    return array
  },

  run: (input: Vector3[]): Vector3[] =>
    input
      .map(srgb => lrgbToXyz(srgb))
      .map((xyz): Vector3 => [(xyz[0] + 0.1) % 1, xyz[1], xyz[2]])
      .map(xyz => xyzToLrgb(xyz)),
}
