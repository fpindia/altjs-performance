module LinearAlgebra where

import Data.CommutativeRing ((*), (+))

type Vector3 = {v0::Number, v1::Number, v2::Number}
type Matrix3 = {m0::Number, m1::Number, m2::Number, m3::Number, m4::Number, m5::Number, m6::Number, m7::Number, m8::Number}

multiplyMatrix3Vector3 :: Matrix3 -> Vector3 -> Vector3
multiplyMatrix3Vector3 m v =
  { v0: v.v0 * m.m0 + v.v1 * m.m1 + v.v2 * m.m2
  , v1: v.v0 * m.m3 + v.v1 * m.m4 + v.v2 * m.m5
  , v2: v.v0 * m.m6 + v.v1 * m.m7 + v.v2 * m.m8
  }
