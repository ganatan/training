# Installation

	Installation en global via npm
		npm install -g typescript

	Installation en local
		npm init -y
		npm install --save-dev typescript		
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

	Rajouter les scripts
		"scripts": {
			"build": "tsc",
			"start": "node dist/app.js",
			"dev": "ts-node src/app.ts",
			"watch": "nodemon --ext ts --exec ts-node src/app.ts"    
		},


# Explications

  ts-node, qui interprète TypeScript à la volée.