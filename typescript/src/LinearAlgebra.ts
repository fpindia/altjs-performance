export type Vector3 = [number, number, number]

export type Matrix3 = [...Vector3, ...Vector3, ...Vector3]

export const MultiplyMatrix3Vector3 = (m: Matrix3, v: Vector3): Vector3 => {
  const v0 = v[0],
    v1 = v[1],
    v2 = v[2]

  return [
    v0 * m[0] + v1 * m[1] + v2 * m[2],
    v0 * m[3] + v1 * m[4] + v2 * m[5],
    v0 * m[6] + v1 * m[7] + v2 * m[8],
  ]
}
