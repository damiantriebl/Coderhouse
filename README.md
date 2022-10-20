# Coderhouse
## TP11

Para levantar el modo FORK

pm2 start server.js --name="server fork" --watch -- -p 8080
* /test/random/:cant => get 

para levantar el resto en modo cluster 

pm2 start server.js --name="Server Cluster" -i max  --watch -- 8080


![image](https://user-images.githubusercontent.com/104037356/197068038-fadc50ed-3dd8-4541-af46-488dcbf9dad4.png)
