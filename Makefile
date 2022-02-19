deploy:
	yarn build
	cd dist && surge --domain d-kanai.surge.sh .
