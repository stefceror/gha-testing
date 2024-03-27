deploy_sandbox:
	git switch main
	git pull
	git switch sandbox
	git rebase main
	git push --set-upstream origin sandbox

deploy_production:
	git switch sandbox
	git pull origin sandbox
	git switch production
	git rebase sandbox
	git push --set-upstream origin production
