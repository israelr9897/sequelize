import express from "express";
import userRout from "./userRout.js"
import postRout from "./postRout.js"

export function configRout(app){
    app.use("/user", userRout)
    app.use("/post", postRout)
}