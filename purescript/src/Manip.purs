module Manip where

import Color (lrgbToXyz, xyzToLrgb)
import Data.Boolean (otherwise)
import Data.CommutativeRing ((+))
import Data.EuclideanRing ((/))
import Data.Function.Uncurried (Fn2, mkFn2)
import Data.Functor (map)
import Data.Int (toNumber)
import Data.Maybe (Maybe(..))
import Data.Ord ((>=))
import Data.Tuple (Tuple(..))
import Data.Unfoldable (unfoldr)
import LinearAlgebra (Vector3)
import Math ((%))

-- make :: Fn2 Int Int (Array Vector3)
-- make = mkFn2 \width height -> do
--   let idxs = [0.0,1.0,2.0]
--   i <- idxs
--   j <- idxs
--   pure {v0: (i % 10.0) / 10.0, v1: (j % 10.0) / 10.0, v2: ((i + j) % 10.0) / 10.0}

make :: Fn2 Int Int (Array Vector3)
make = mkFn2 f
  where
    f width height = unfoldr g (Tuple 0 0)
      where
        g (Tuple i j)
          | i >= width = Nothing
          | j >= height = Just (Tuple (m i j) (Tuple (i+1) 0))
          | otherwise = Just (Tuple (m i j) (Tuple i (j+1)))
        m i j = {v0: ((toNumber i) % 10.0) / 10.0, v1: ((toNumber j) % 10.0) / 10.0, v2: ((toNumber (i + j)) % 10.0) / 10.0}

run :: Array Vector3 -> Array Vector3
run = map run'
  where
  run' xyz' = xyzToLrgb {v0: (xyz.v0 + 0.1) % 1.0, v1: xyz.v1, v2: xyz.v2}
    where xyz = lrgbToXyz xyz'
