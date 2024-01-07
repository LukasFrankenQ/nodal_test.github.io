print("Running main.py")

import numpy as np

a = np.random.normal(size=5)

print("Random array: ", a)

import pandas as pd
print(pd.Series(a).to_csv("random.csv"))

print("Stored random array in 'random.csv'!")