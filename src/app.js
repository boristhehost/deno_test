// const express=require('express')

import express from 'express'

const app=express()
const PORT=process.env.PORT||3000

app.get('/hello',(req,res)=>{
	res.json('hello world')
})

app.listen(PORT,()=>{
	console.log('app runing on port ',PORT)
})
