include .env

release-patch:
	npx release-it patch

release-minor:
	npx release-it minor

release-major:
	npx release-it major

