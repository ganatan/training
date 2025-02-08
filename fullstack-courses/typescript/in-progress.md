# Installation


	- Installation et test rapide
	
		Installation en global via npm
		npm install -g typescript

	  mkdir typescript-starter
  	cd typescript-starter

		creer un fichier app.ts
			console.log('Movie');

		tsc app
		node app

		Désinstallation en global via npm
		npm uninstall -g typescript



	- Installation en local
		npm init -y
		npm install --save-dev typescript

		Rajouter les scripts		

			"scripts": {
				"build": "tsc app",
				"start": "node app"
			},





		npm install --save-dev nodemon ts-node

		creer tsconfig.json
				{
					"compilerOptions": {
						"target": "ES6",
						"module": "CommonJS",
						"outDir": "./dist"
					},
					"include": ["src"]
				}

	- Rajouter les scripts

		"scripts": {
			"build": "tsc",
			"start": "node dist/app.js",
			"dev": "ts-node src/app.ts",
			"watch": "nodemon --ext ts --exec ts-node src/app.ts"    
		},

# Explications

  ts-node, qui interprète TypeScript à la volée.