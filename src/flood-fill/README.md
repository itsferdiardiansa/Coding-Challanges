## Flood fill

An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

Return the modified image after performing the flood fill.

```
sr = 2
sc = 2
color = 5

  [
    [1, 1, 1, 0, 1],
    [1, 1, 0, 1, 0],
    [1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0]
  ]

  expected:
  [
    [5, 5, 5, 0, 1],
    [5, 5, 0, 5, 0],
    [5, 5, 5, 5, 0],
    [0, 0, 0, 5, 0]
  ]
```

queue: [ [2, 2] ]

loop 1
shift queue: [2, 2]
start loop to get the neighboor(s) of [2, 2]
  [ [2, 3] ]
  [ [2, 3], [1, 2] ]

loop 2
shift queue: [2, 3]
start loop to get the neighboor(s) of [2, 3]
  [ [2, 1], [1, 3], [3, 3] ]


loop 3
shift queue: [2, 1]
start loop to get the neighboor(s) of [2, 1]
  [ [1, 3], [3, 3], [2, 0], [1, 1] ]

loop 4
shift queue: [1, 3]
start loop to get the neighboor(s) of [1, 3]
  [ [3, 3], [2, 0], [1, 1] ]


loop 5
shift queue: [3, 3]
start loop to get the neighboor(s) of [3, 3]
  [ [2, 0], [1, 1] ]


loop 6
shift queue: [2, 0]
start loop to get the neighboor(s) of [2, 0]
  [ [1, 1], [1, 0] ]

loop 7
shift queue: [1, 1]
start loop to get the neighboor(s) of [1, 1]
  [ [1, 0], [0, 1] ]

loop 8
shift queue: [1, 0]
start loop to get the neighboor(s) of [1, 0]
  [ [0, 1], [0, 0] ]

loop 9
shift queue: [0, 1]
start loop to get the neighboor(s) of [0, 1]
  [ [0, 0], [0, 2] ]


loop 9
shift queue: [0, 0]
start loop to get the neighboor(s) of [0, 0]
  [ [0, 2] ]

loop 10
shift queue: [0, 2]
start loop to get the neighboor(s) of [0, 2]
  []

 