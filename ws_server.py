import tornado.httpserver
import tornado.websocket
import tornado.ioloop
import tornado.web
import socket
import json
import time
import random


class WSHandler(tornado.websocket.WebSocketHandler):
    def open(self):
        print('connection established')

    def on_message(self, message):
        print('message received: {}'.format(message))
        payload = json.loads(message)
        n = payload['count']
        for _ in range(n):
            time.sleep(2)
            r = random.randrange(0, 100)
            msg = json.dumps({"value": r})
            self.write_message(msg)
        self.close()

    def on_close(self):
        print('connection closed')

    def check_origin(self, origin):
        return True


app = tornado.web.Application(
        [(r'/ws', WSHandler),]
        )

if __name__ == "__main__":
    http_server = tornado.httpserver.HTTPServer(app)
    http_server.listen(8888)
    myIP = socket.gethostbyname(socket.gethostname())
    print('*** websocket server started at {} ***'.format(myIP))
    tornado.ioloop.IOLoop.instance().start()
