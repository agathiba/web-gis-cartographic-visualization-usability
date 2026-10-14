# -*- coding: utf-8 -*-
"""
@author: Bantisouli Agathi
"""
#Library
import numpy as np

#Import the dataset as a NumPy array.
data = np.array([
    [309694, 300078, 275164, 239859, 239206, 228871, 223796, 322789],
    [159954, 166964, 159953, 173077, 211970, 227871, 240355, 176876],
    [159300, 179429, 160257, 165056, 188861, 188274, 185085, 193288],
    [145082, 141823, 123085, 113115, 112505, 113358, 111547, 154624],
    [97044, 97366, 92742, 88698, 90145, 85389, 80188, 105770],
    [89138, 95696, 93188, 95844, 118661, 130898, 144156, 99637],
    [86685, 105309, 108096, 111263, 135042, 154361, 171062, 102035]
])

#Calculate the quantile limits for the data.
quantile_limits_5 = np.quantile(data, [0, 0.2, 0.4, 0.6, 0.8, 1])

#Print the calculated quantile limits.
print("Quantile limits:", quantile_limits_5)
