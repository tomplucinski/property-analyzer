.PHONY: install-client install-server

run:
	$(info ~~~~~~~~~~ STARTING CLIENT AND SERVER ~~~~~~~~~)
	cd ./server && npm start

install-client: 
	cd ./client && npm install
install-server: 
	cd ./server && npm install

install: install-client install-server
