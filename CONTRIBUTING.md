(Lånt fra [OpenGovernment for Developers](https://github.com/opengovernment/opengovernment))

# How to contribute

Hyggelig at du ønsker å bidra til Koseprogg-prosjektet! Det synes vi er skikkelig kult!

Her er noen nyttige ressurser:

- [Remix Docs](https://remix.run/docs/en/v1)
- [Project tracking](https://github.com/orgs/koseprogg/projects/1)

## Testing

Pass på at testene kjører i PRen før du spør om review!

## Submitting changes

1. Fork prosjektet
1. Gjør endringer
1. Opprette en [GitHub Pull Request to koseprogg/abated-foredrag-webapp](https://github.com/koseprogg/abated-foredrag-webapp/pulls) som beskriver godt hva du har gjort (les mer om [pull requests](http://help.github.com/pull-requests/)). Vi digger når du følger konvensjoenen vi bruker, og legg gjerne til tester!

Vi bruker [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/)
Always write a clear log message for your commits. One-line messages are fine for small changes, but bigger changes should look like this:

    $ git commit -m "A brief summary of the commit
    >
    > A paragraph describing what changed and its impact."

<!-- ## Coding conventions

Start reading our code and you'll get the hang of it. We optimize for readability:

- We indent using two spaces (soft tabs)
- We use HAML for all views
- We avoid logic in views, putting HTML generators into helpers
- We ALWAYS put spaces after list items and method parameters (`[1, 2, 3]`, not `[1,2,3]`), around operators (`x += 1`, not `x+=1`), and around hash arrows.
- This is open source software. Consider the people who will read your code, and make it look nice for them. It's sort of like driving a car: Perhaps you love doing donuts when you're alone, but with passengers the goal is to make the ride as smooth as possible.
- So that we can consistently serve images from the CDN, always use image_path or image_tag when referring to images. Never prepend "/images/" when using image_path or image_tag.
- Also for the CDN, always use cwd-relative paths rather than root-relative paths in image URLs in any CSS. So instead of url('/images/blah.gif'), use url('../images/blah.gif'). -->
