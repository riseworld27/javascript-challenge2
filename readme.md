## Introduction

This is a separate JavaScript coding exercise with no UI interaction.
Write a single function that takes two string inputs and returns a single string of either "TRUE" or "FALSE". The function should determine if the first input is equal to the second input when you are able to modify the first string input. The following modifications to the first string input are permitted: letters may be capitalized, or discarded, but otherwise not changed.

Console.log the following examples:
(‘ebCde’,’BCD’) TRUE
(‘eCB’,’ECB’) TRUE (e was uppercased)
(‘BcdEF’,’BCEF’) TRUE (c was uppercased, d was discarded)
(‘BCD’,’BcD’) FALSE (C could not be lowercased)
