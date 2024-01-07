import os
import numpy as np
import pandas as pd

print("Running main.py")

a = np.random.random(size=5)

print("New random array: ", a)

try:
    os.system("mv results/random2.csv results/random3.csv")
    print("Moved random2.csv to random3.csv")
except FileNotFoundError:
    pass

try:
    os.system("mv results/random1.csv results/random2.csv")
    print("Moved random1.csv to random2.csv")
except FileNotFoundError:
    pass

pd.Series(a).to_csv("results/random1.csv", index=False, header=False)

print("Stored random array in 'random1.csv'!")