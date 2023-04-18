#!/bin/bash
mkdir module
cp module.json module/module.json
cp -r scripts module/scripts
zip -r module.zip module 
rm -r module
mv module.zip release/latest/
