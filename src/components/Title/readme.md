# Title Component
Provides a title for a specific section of a page. Component will render as follows: (1) Title; (2) Subtitle (3)Link

## Options
- `name`: (String - required) Section Title
- `subtitle`: (String - optional) A span component under the title
- `link`: (String - optional) link direction
- `textLink`: (String - optional) Title for the link

## Install
```
import Title from 'components/Title'
```

## Examples
```
<Title name={'Journal'} />
<Title subtitle={'Notes on life and style'} />
```