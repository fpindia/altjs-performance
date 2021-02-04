module Color where

import Data.Field (negate)
import LinearAlgebra (Matrix3, multiplyMatrix3Vector3, Vector3)

lrgbToXyz :: Vector3 -> Vector3
lrgbToXyz = multiplyMatrix3Vector3 vLRGB_TO_XYZ_MATRIX

xyzToLrgb :: Vector3 -> Vector3
xyzToLrgb = multiplyMatrix3Vector3 vXYZ_TO_LRGB_MATRIX

vLRGB_TO_XYZ_MATRIX :: Matrix3
vLRGB_TO_XYZ_MATRIX =
  { m0: 0.4124564
  , m1: 0.3575761
  , m2: 0.1804375
  , m3: 0.2126729
  , m4: 0.7151522
  , m5: 0.072175
  , m6: 0.0193339
  , m7: 0.119192
  , m8: 0.9503041
  }

vXYZ_TO_LRGB_MATRIX :: Matrix3
vXYZ_TO_LRGB_MATRIX =
  { m0: 3.2404542
  , m1: (-1.5371385)
  , m2: (-0.4985314)
  , m3: (-0.969266)
  , m4: 1.8760108
  , m5: 0.041556
  , m6: 0.0556434
  , m7: (-0.2040259)
  , m8: 1.0572252
  }
