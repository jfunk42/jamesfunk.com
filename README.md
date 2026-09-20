# jamesfunk.com

Static GitHub Pages site for the Math Quiz App landing page and Science Brief podcast quizzes.

## Included site features

- App overview and Google Play link
- Browser-side GitHub issue form that opens pre-filled issues for `jfunk42/multiplication-practice`
- Reusable form pattern for adding more app issue forms later
- JSON-backed multiple-choice Science Brief quizzes at `/podcast-quizzes/`
- Latest-quiz default view, hash-addressable quiz titles, recent links, and catalog search

## Podcast quizzes

Quiz data is stored in `podcast-quizzes/data/quizzes.json`. Each quiz includes its `title`,
`publishedAt` date, description, tags, and questions. Every question has exactly one correct
choice. Choices include an explanation; the correct choice also includes a source label and HTTPS
URL displayed after it is selected.

The newest quiz opens by default. A specific older quiz can be linked with an encoded title hash,
for example:

`/podcast-quizzes/#The%20Moon's%20New%20Scar`

## Publish

1. Push this folder to the `jamesfunk.com` repository on GitHub.
2. In **Settings > Pages**, deploy from your main branch and the repository root.
3. Point your domain DNS at GitHub Pages if it is not already configured.
