const express = require("express")
const app = express()

app.listen(1029)

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html")
}) 

app.get('/logo/realmadrid', (req, res) => {
  res.sendFile(__dirname + "/realmadrid.png")
}) 

app.get('/logo/sevilla', (req, res) => {
  res.sendFile(__dirname + "/sevilla.png")
}) 

app.get('/logo/elche', (req, res) => {
  res.sendFile(__dirname + "/elche.png")
}) 

app.get('/logo/osasuna', (req, res) => {
  res.sendFile(__dirname + "/osasuna.png")
}) 

app.get('/logo/unitedarabemirates', (req, res) => {
  res.sendFile(__dirname + "/unitedarabemirates.png")
}) 

app.get('/logo/syria', (req, res) => {
  res.sendFile(__dirname + "/syria.png")
}) 

app.get('/logo/mauritania', (req, res) => {
  res.sendFile(__dirname + "/mauritania.png")
}) 

app.get('/logo/tunisia', (req, res) => {
  res.sendFile(__dirname + "/tunisia.png")
}) 
                        app.get('/logo/iraq', (req, res) => {
  res.sendFile(__dirname + "/iraq.png")
}) 

app.get('/logo/oman', (req, res) => {
  res.sendFile(__dirname + "/oman.png")
}) 

app.get('/logo/qatar', (req, res) => {
  res.sendFile(__dirname + "/qatar.png")
}) 

app.get('/logo/bahrain', (req, res) => {
  res.sendFile(__dirname + "/bahrain.png")
}) 

app.get('/logo/newcastle', (req, res) => {
  res.sendFile(__dirname + "/newcastle.png")
}) 

app.get('/logo/norwich', (req, res) => {
  res.sendFile(__dirname + "/norwich.png")
}) 

app.get('/logo/leedsunited', (req, res) => {
  res.sendFile(__dirname + "/leedsunited.png")
}) 

app.get('/logo/crystalpalace', (req, res) => {
  res.sendFile(__dirname + "/crystalpalace.png")
}) 