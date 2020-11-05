# Information Retrieval Aid Proof-of-concept
> A Linked Data initiative connecting a library catalog (Indiana University's [IUCAT](https://iucat.iu.edu)) with a Linked Data controlled vocabulary ([Homosaurus](http://homosaurus.org)) to aid researchers in discovering relevant resources using terminology representing a community, from that community.

## General Info
Motivated by a concern that Library of Congress Subjects Headings (LCSH) are often slow to change and do not represent systemically marginalized communities well. If those communities are supplying terminology and it is available as Linked Data, why not use that vocabulary as a search and discovery aid? Terminology from the community not included in LCSH can expand the range of search terms useful to researchers for finding relevant resources, especially if relationships between the community's vocabulary and LCSH are defined.

Homosaurus, an international linked data vocabulary of LGBTQ terms, provides the community-supplied vocabulary and Indiana University's online library catalog, IUCAT, provides search results connected via LCSH subject searching or direct keyword searching. A different controlled vocabulary of terms could be used in place of Homosaurus and a different library catalog using LCSH subject terms could be searched.

## Technologies
* HTML
* Javascript
* CSS

This runs as a standalone HTML page.

## Setup
Clone or download the code and open concept.html in preferred browser.

## Features
* Terms listed alphabetically from community vocabulary available in left side panel
* Selected term shows in main right panel as preferred term in center of bubble interface
    - Exactly matching terms from LCSH provided above preferred term
    - Broader terms from the community vocabulary provided to the right of the preferred term
    - Terms for which the selected term should be used (Use For) and related terms from the community vocabulary provided below the preferred term
    - Narrower terms from the community vocabulary to the left of the preferred term
* Reset button available to refresh the interface and remove selected term

To-do List:
* Pull term list from community vocabulary Linked Data source via API instead of manually supplying in termListActions.js
* Provide alphabetical sorting of term list
* Replace Preferred, Exact Match, Broader, Use For, Related, and Narrower headings with easier to understand headings (or provide contextual explanation)
* Implement with different community vocabulary source and/or different library catalog search system

## Status
Project is: _in progress_

## Inspiration
Interface design is based on the design of the search aid provided at [IHLIA LGBTI Heritage](http://www.ihlia.nl/search/?lang=en). Thanks to Brian M. Watson, Editorial Board member of Homosaurus.org, for their help with using Homosaurus version 2 terms. Also thanks to the work of Justina Kaiser who created the initial code behind the information retrieval aid. This project is forked from her project!

## License
[![CC BY-NC-SA 4.0](https://i.creativecommons.org/l/by-nc-sa/4.0/80x15.png) Licensed under CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)
