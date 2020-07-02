//go to playcode.io to test the javascript
//referenced in test.html

//Homosaurus v1 jsonld, letters A and H only
//"skos:exactMatch" added manually from listings on homosaurus.org's v2 that haven't been updated into the JSON-LD format as of 1/8/20
//Homosaurus v2, words chosen based on interconnectedness
let homosaurus = {
  "@context": {
		"dc": "http://purl.org/dc/terms/",
    	"rdfs": "http://www.w3.org/2000/01/rdf-schema#",
	    "skos": "http://www.w3.org/2004/02/skos/core#",
    	"xsd": "http://www.w3.org/2001/XMLSchema#"
	  },
  "Adoptive parents" : {

      "@id": "http://homosaurus.org/v2/adoptiveParents",
      "@type": "skos:Concept",
      "dc:identifier": "adoptiveParents",
      "dc:issued": {
        "@value": "2019-05-14",
        "@type": "xsd:date"
      },
      "dc:modified": {
        "@value": "2019-11-10",
        "@type": "xsd:date"
      },
      "skos:broader": {
        "@id": "http://homosaurus.org/v2/parentsLGBTQ"
      },
      "skos:hasTopConcept": {
        "@id": "http://homosaurus.org/v2/familyMembers"
      },
      "skos:inScheme": {
        "@id": "http://homosaurus.org/terms"
      },
      "skos:prefLabel": "Adoptive parents",
      "skos:exactMatch": {
      	"@id": "http://id.loc.gov/authorities/subjects/sh92003241"
      }, 
      "skos:related": [
        {
          "@id": "http://homosaurus.org/v2/birthParents"
        },
        {
          "@id": "http://homosaurus.org/v2/LGBTQAdoption"
        },
        {
          "@id": "http://homosaurus.org/v2/socialParenthood"
        }
      ]
    },
    "Age of consent" : {

      "@id": "http://homosaurus.org/v2/ageOfConsent",
      "@type": "skos:Concept",
      "dc:identifier": "ageOfConsent",
      "dc:issued": {
        "@value": "2019-05-14",
        "@type": "xsd:date"
      },
      "dc:modified": {
        "@value": "2019-11-10",
        "@type": "xsd:date"
      },
      "skos:hasTopConcept": {
        "@id": "http://homosaurus.org/v2/ageOfConsent"
      },
      "skos:inScheme": {
        "@id": "http://homosaurus.org/terms"
      },
      "skos:prefLabel": "Age of consent",
      "skos:exactMatch": {
        "@id": "http://id.loc.gov/authorities/subjects/sh85002086"
      },
      "skos:related": [
        {
          "@id": "http://homosaurus.org/v2/intergenerationalRelationships"
        },
        {
          "@id": "http://homosaurus.org/v2/sexualOffencesLaws"
        }
      ]
    },
    "AIDS Activists" : {

      "@id": "http://homosaurus.org/v2/AIDSActivists",
      "@type": "skos:Concept",
      "dc:identifier": "AIDSActivists",
      "dc:issued": {
        "@value": "2019-05-14",
        "@type": "xsd:date"
      },
      "dc:modified": {
        "@value": "2019-10-25",
        "@type": "xsd:date"
      },
      "skos:broader": {
        "@id": "http://homosaurus.org/v2/activistsLGBTQ"
      },
      "skos:hasTopConcept": {
        "@id": "http://homosaurus.org/v2/activistsLGBTQ"
      },
      "skos:inScheme": {
        "@id": "http://homosaurus.org/terms"
      },
      "skos:prefLabel": "AIDS activists",
      "skos:exactMatch": {
        "@id": "http://id.loc.gov/authorities/subjects/sh93005197"
      },
      "skos:related": [
        {
          "@id": "http://homosaurus.org/v2/AIDSOrganisations"
        },
        {
          "@id": "http://homosaurus.org/v2/HIVAIDS"
        }
      ]
    },
    "AIDS phobia" : {

      "@id": "http://homosaurus.org/v2/AIDSPhobia",
      "@type": "skos:Concept",
      "dc:identifier": "AIDSPhobia",
      "dc:issued": {
        "@value": "2019-05-14",
        "@type": "xsd:date"
      },
      "dc:modified": {
        "@value": "2019-10-25",
        "@type": "xsd:date"
      },
      "skos:altLabel": [
        "AIDSphobia",
        "Fear of AIDS"
      ],
      "skos:hasTopConcept": {
        "@id": "http://homosaurus.org/v2/AIDSPhobia"
      },
      "skos:inScheme": {
        "@id": "http://homosaurus.org/terms"
      },
      "skos:prefLabel": "AIDS phobia",
      "skos:exactMatch": {
        "@id": "http://id.loc.gov/authorities/subjects/sh88004490"
      },
      "skos:related": [
        {
          "@id": "http://homosaurus.org/v2/LGBTQPhobia"
        },
        {
          "@id": "http://homosaurus.org/v2/HIVAIDS"
        }
      ]
    },
    "Amazons" : {

      "@id": "http://homosaurus.org/v2/amazons",
      "@type": "skos:Concept",
      "dc:identifier": "amazons",
      "dc:issued": {
        "@value": "2019-05-14",
        "@type": "xsd:date"
      },
      "dc:modified": {
        "@value": "2019-09-17",
        "@type": "xsd:date"
      },
      "rdfs:comment": "Nation of all-female warriors in Greek mythology and Classical antiquity; from the Early Modern period, their name has become a term for woman warriors in general",
      "skos:broader": {
        "@id": "http://homosaurus.org/v2/women"
      },
      "skos:hasTopConcept": {
        "@id": "http://homosaurus.org/v2/gender"
      },
      "skos:inScheme": {
        "@id": "http://homosaurus.org/terms"
      },
      "skos:prefLabel": "Amazons",
      "skos:exactMatch": {
        "@id": "http://id.loc.gov/authorities/subjects/sh85004138"
      }
    },
    "Anal sex": {

      "@id": "http://homosaurus.org/v2/analSex",
      "@type": "skos:Concept",
      "dc:identifier": "analSex",
      "dc:issued": {
        "@value": "2019-05-14",
        "@type": "xsd:date"
      },
      "dc:modified": {
        "@value": "2019-11-10",
        "@type": "xsd:date"
      },
      "skos:altLabel": "Butt fucking",
      "skos:broader": [
        {
          "@id": "http://homosaurus.org/v2/sexAct"
        },
        {
          "@id": "http://homosaurus.org/v2/sexualPractices"
        }
      ],
      "skos:hasTopConcept": [
        {
          "@id": "http://homosaurus.org/v2/sexAct"
        },
        {
          "@id": "http://homosaurus.org/v2/sexualPractices"
        }
      ],
      "skos:inScheme": {
        "@id": "http://homosaurus.org/terms"
      },
      "skos:narrower": [
        {
          "@id": "http://homosaurus.org/v2/barebacking"
        },
        {
          "@id": "http://homosaurus.org/v2/fingering"
        },
        {
          "@id": "http://homosaurus.org/v2/fisting"
        },
        {
          "@id": "http://homosaurus.org/v2/fucking"
        },
        {
          "@id": "http://homosaurus.org/v2/rimming"
        },
        {
          "@id": "http://homosaurus.org/v2/scat"
        }
      ],
      "skos:prefLabel": "Anal sex",
      "skos:exactMatch": {
        "@id": "http://id.loc.gov/authorities/subjects/sh85004760"
      },
      "skos:related": [
        {
          "@id": "http://homosaurus.org/v2/analFisting"
        },
        {
          "@id": "http://homosaurus.org/v2/assFucking"
        },
        {
          "@id": "http://homosaurus.org/v2/enemas"
        },
        {
          "@id": "http://homosaurus.org/v2/assplay"
        }
      ]
    },
    "Anti-discrimination law" : {

      "@id": "http://homosaurus.org/v2/anti-discriminationLaw",
      "@type": "skos:Concept",
      "dc:identifier": "anti-discriminationLaw",
      "dc:issued": {
        "@value": "2019-05-14",
        "@type": "xsd:date"
      },
      "dc:modified": {
        "@value": "2019-11-10",
        "@type": "xsd:date"
      },
      "skos:broader": {
        "@id": "http://homosaurus.org/v2/law"
      },
      "skos:hasTopConcept": {
        "@id": "http://homosaurus.org/v2/law"
      },
      "skos:inScheme": {
        "@id": "http://homosaurus.org/terms"
      },
      "skos:prefLabel": "Anti-discrimination law",
      "skos:exactMatch": {
        "@id": "http://id.loc.gov/authorities/subjects/sh93005719",
        "@note": "Discrimination--Law and legislation"
      },
      "skos:related": [
        {
          "@id": "http://homosaurus.org/v2/discriminationLGBTQ"
        },
        {
          "@id": "http://homosaurus.org/v2/publicFacilities"
        }
      ]
    },
    "Anti-feminism" : {

      "@id": "http://homosaurus.org/v2/anti-feminism",
      "@type": "skos:Concept",
      "dc:identifier": "anti-feminism",
      "dc:issued": {
        "@value": "2019-05-14",
        "@type": "xsd:date"
      },
      "dc:modified": {
        "@value": "2019-09-15",
        "@type": "xsd:date"
      },
      "rdfs:comment": "Opposition to some or all forms of feminism",
      "skos:hasTopConcept": {
        "@id": "http://homosaurus.org/v2/anti-feminism"
      },
      "skos:inScheme": {
        "@id": "http://homosaurus.org/terms"
      },
      "skos:prefLabel": "Anti-feminism",
      "skos:exactMatch": {
        "@id": "http://id.loc.gov/authorities/subjects/sh96004456"
      },
      "skos:related": [
        {
          "@id": "http://homosaurus.org/v2/privilege"
        },
        {
          "@id": "http://homosaurus.org/v2/feminism"
        }
      ]
    },
  "Asexual people" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/v2/asexualPeople",
    "@type": "skos:Concept",
    "dc:identifier": "asexualPeople",
    "dc:issued": {
      "@value": "2019-05-14",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2019-05-14",
      "@type": "xsd:date"
    },
    "skos:broader": {
      "@id": "http://homosaurus.org/v2/sexualMinorities",
      "term": "Sexual minorities"
    },
    "skos:hasTopConcept": {
      "@id": "http://homosaurus.org/v2/sexualOrientation"
    },
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "Asexual people",
    "skos:exactMatch": {
      "@id": "http://id.loc.gov/authorities/subjects/sh2016000237"
    },
    "skos:related": [
      {
        "@id": "http://homosaurus.org/v2/asexuality"
      },
      {
        "@id": "http://homosaurus.org/v2/celibacy"
      },
      {
        "@id": "http://homosaurus.org/v2/demisexualPeople",
        "term": "Demisexual people"
      }
    ]
  },
  "Autoeroticism" : {

      "@id": "http://homosaurus.org/v2/autoeroticism",
      "@type": "skos:Concept",
      "dc:identifier": "autoeroticism",
      "dc:issued": {
        "@value": "2019-05-14",
        "@type": "xsd:date"
      },
      "dc:modified": {
        "@value": "2019-11-07",
        "@type": "xsd:date"
      },
      "skos:hasTopConcept": {
        "@id": "http://homosaurus.org/v2/autoeroticism"
      },
      "skos:inScheme": {
        "@id": "http://homosaurus.org/terms"
      },
      "skos:prefLabel": "Autoeroticism",
      "skos:exactMatch": {
        "@id": "http://id.loc.gov/authorities/subjects/sh85082015",
        "@note": "Masturbation"
      },
      "skos:related": {
        "@id": "http://homosaurus.org/v2/masturbation"
      }
    },
   "Aversion therapy" : {

      "@id": "http://homosaurus.org/v2/aversionTherapy",
      "@type": "skos:Concept",
      "dc:identifier": "aversionTherapy",
      "dc:issued": {
        "@value": "2019-05-14",
        "@type": "xsd:date"
      },
      "dc:modified": {
        "@value": "2019-11-10",
        "@type": "xsd:date"
      },
      "rdfs:comment": "Behavior modification therapy displacing pleasant associations evoked by homosexuality with unpleasant ones (in the form of electric shocks or a nausea-inducing drug) in order to shift the subject's homosexual orientation to a heterosexual one",
      "skos:broader": {
        "@id": "http://homosaurus.org/v2/behaviouralTherapy"
      },
      "skos:hasTopConcept": {
        "@id": "http://homosaurus.org/v2/law"
      },
      "skos:inScheme": {
        "@id": "http://homosaurus.org/terms"
      },
      "skos:prefLabel": "Aversion therapy",
      "skos:exactMatch": {
        "@id": "http://id.loc.gov/authorities/subjects/sh85010520"
      },
      "skos:related": {
        "@id": "http://homosaurus.org/v2/sexualReorientation"
      }
    },
  "Demisexual people" : {
    "@context": {
      "dc": "http://purl.org/dc/terms/",
      "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
      "skos": "http://www.w3.org/2004/02/skos/core#",
      "xsd": "http://www.w3.org/2001/XMLSchema#"
    },
    "@id": "http://homosaurus.org/v2/demisexualPeople",
    "@type": "skos:Concept",
    "dc:identifier": "demisexualPeople",
    "dc:issued": {
      "@value": "2019-05-14",
      "@type": "xsd:date"
    },
    "dc:modified": {
      "@value": "2019-05-14",
      "@type": "xsd:date"
    },
    "rdfs:comment": "People who don’t experience sexual attraction unless they form a strong emotional connection with someone",
    "skos:broader": [
      {
        "@id": "http://homosaurus.org/v2/sexualMinorities",
        "term": "Sexual minorities"
      },
      {
        "@id": "http://homosaurus.org/v2/sexualIdentity"
      }
    ],
    "skos:hasTopConcept": [
      {
        "@id": "http://homosaurus.org/v2/sexualOrientation"
      },
      {
        "@id": "http://homosaurus.org/v2/sexualIdentity"
      }
    ],
    "skos:inScheme": {
      "@id": "http://homosaurus.org/terms"
    },
    "skos:prefLabel": "Demisexual people",
    "skos:related": [
      {
        "@id": "http://homosaurus.org/v2/sexualRelationships"
      },
      {
        "@id": "http://homosaurus.org/v2/demisexuality"
      },
      {
        "@id": "http://homosaurus.org/v2/LGBTQEmotions"
      },
      {
        "@id": "http://homosaurus.org/v2/asexualPeople",
        "term": "Asexual people"
      }
    ]
  },
"Fetishism" : {
  "@context": {
    "dc": "http://purl.org/dc/terms/",
    "skos": "http://www.w3.org/2004/02/skos/core#",
    "xsd": "http://www.w3.org/2001/XMLSchema#"
  },
  "@id": "http://homosaurus.org/v2/fetishism",
  "@type": "skos:Concept",
  "dc:identifier": "fetishism",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/sexualPreference",
    "term": "Sexual preference"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/sexualPreference"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:narrower": [
    {
      "@id": "http://homosaurus.org/v2/ephebophilia"
    },
    {
      "@id": "http://homosaurus.org/v2/exhibitionism"
    },
    {
      "@id": "http://homosaurus.org/v2/vampirism"
    },
    {
      "@id": "http://homosaurus.org/v2/voyeurism",
      "term": "Voyeurism"
    },
    {
      "@id": "http://homosaurus.org/v2/masochism"
    },
    {
      "@id": "http://homosaurus.org/v2/sadism"
    },
    {
      "@id": "http://homosaurus.org/v2/gerontophilia"
    },
    {
      "@id": "http://homosaurus.org/v2/hebephilia"
    }
  ],
  "skos:prefLabel": "Fetishism",
  "skos:exactMatch": {
    "@id": "http://id.loc.gov/authorities/subjects/sh85047960"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/autoeroticAsphyxiation"
    },
    {
      "@id": "http://homosaurus.org/v2/BDSM"
    },
    {
      "@id": "http://homosaurus.org/v2/waterSports"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualIdentity"
    },
    {
      "@id": "http://homosaurus.org/v2/consent"
    }
  ]
},
"Gay community": {
  "@context": {
    "dc": "http://purl.org/dc/terms/",
    "skos": "http://www.w3.org/2004/02/skos/core#",
    "xsd": "http://www.w3.org/2001/XMLSchema#"
  },
  "@id": "http://homosaurus.org/v2/gayCommunity",
  "@type": "skos:Concept",
  "dc:identifier": "gayCommunity",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/communitiesLGBTQ"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/communitiesLGBTQ"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Gay community",
  "skos:exactMatch": {
    "@id": "http://id.loc.gov/authorities/subjects/sh91003435"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/LGBTQ+"
    },
    {
      "@id": "http://homosaurus.org/v2/gayCommunityCentres"
    },
    {
      "@id": "http://homosaurus.org/v2/gayMen",
      "term": "Gay men"
    },
    {
      "@id": "http://homosaurus.org/v2/LGB"
    },
    {
      "@id": "http://homosaurus.org/v2/LGBT"
    },
    {
      "@id": "http://homosaurus.org/v2/LGBTI"
    },
    {
      "@id": "http://homosaurus.org/v2/LGBTQIA"
    },
    {
      "@id": "http://homosaurus.org/v2/LGBTQ"
    }
  ]
},
"Gay men" : {
  "@context": {
    "dc": "http://purl.org/dc/terms/",
    "skos": "http://www.w3.org/2004/02/skos/core#",
    "xsd": "http://www.w3.org/2001/XMLSchema#"
  },
  "@id": "http://homosaurus.org/v2/gayMen",
  "@type": "skos:Concept",
  "dc:identifier": "gayMen",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:altLabel": ["Gays"],
  "skos:broader": [
    {
      "@id": "http://homosaurus.org/v2/men"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualMinorities",
      "term": "Sexual minorities"
    },
    {
      "@id": "http://homosaurus.org/v2/LGBTQPeople"
    }
  ],
  "skos:hasTopConcept": [
    {
      "@id": "http://homosaurus.org/v2/gender"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualOrientation"
    },
    {
      "@id": "http://homosaurus.org/v2/LGBTQPeople"
    }
  ],
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:narrower": [
    {
      "@id": "http://homosaurus.org/v2/machoMen"
    },
    {
      "@id": "http://homosaurus.org/v2/otters"
    },
    {
      "@id": "http://homosaurus.org/v2/queens"
    },
    {
      "@id": "http://homosaurus.org/v2/bears"
    },
    {
      "@id": "http://homosaurus.org/v2/closetedGayMen"
    },
    {
      "@id": "http://homosaurus.org/v2/wolves"
    },
    {
      "@id": "http://homosaurus.org/v2/olderGayMen"
    },
    {
      "@id": "http://homosaurus.org/v2/twinks"
    },
    {
      "@id": "http://homosaurus.org/v2/babyGay"
    }
  ],
  "skos:prefLabel": "Gay men",
  "skos:exactMatch": {
    "@id": "http://id.loc.gov/authorities/subjects/sh85061798"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/queerMen"
    },
    {
      "@id": "http://homosaurus.org/v2/seaQueens"
    },
    {
      "@id": "http://homosaurus.org/v2/faggots"
    },
    {
      "@id": "http://homosaurus.org/v2/gayBoys"
    },
    {
      "@id": "http://homosaurus.org/v2/gayCharacters"
    },
    {
      "@id": "http://homosaurus.org/v2/gayCommunity",
      "term": "Gay community"
    },
    {
      "@id": "http://homosaurus.org/v2/gayIdentity"
    },
    {
      "@id": "http://homosaurus.org/v2/menWhoHaveSexWithMen"
    },
    {
      "@id": "http://homosaurus.org/v2/parentsOfGayMen"
    },
    {
      "@id": "http://homosaurus.org/v2/partnersOfGayMen"
    },
    {
      "@id": "http://homosaurus.org/v2/persecutionOfGayMen"
    },
    {
      "@id": "http://homosaurus.org/v2/gayYouth"
    },
    {
      "@id": "http://homosaurus.org/v2/homosexuality"
    },
    {
      "@id": "http://homosaurus.org/v2/lesbian-gayRelations"
    }
  ]
},
"Heteronormativity" : {
  "@context": {
    "dc": "http://purl.org/dc/terms/",
    "skos": "http://www.w3.org/2004/02/skos/core#",
    "xsd": "http://www.w3.org/2001/XMLSchema#"
  },
  "@id": "http://homosaurus.org/v2/heteronormativity",
  "@type": "skos:Concept",
  "dc:identifier": "heteronormativity",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:altLabel": ["Heterosexual norms"],
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/socialNorms"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/socialNorms"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Heteronormativity",
  "skos:exactMatch": {
    "@id": "http://id.loc.gov/authorities/subjects/sh93002513",
    "@note": "Heterosexism"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/normalisation"
    },
    {
      "@id": "http://homosaurus.org/v2/heterosexism"
    },
    {
      "@id": "http://homosaurus.org/v2/homonormativity"
    }
  ]
},
"Heterosexuality" : {
  "@context": {
    "dc": "http://purl.org/dc/terms/",
    "skos": "http://www.w3.org/2004/02/skos/core#",
    "xsd": "http://www.w3.org/2001/XMLSchema#"
  },
  "@id": "http://homosaurus.org/v2/heterosexuality",
  "@type": "skos:Concept",
  "dc:identifier": "heterosexuality",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/sexualOrientation",
    "term": "Sexual orientation"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/sexualOrientation"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Heterosexuality",
  "skos:exactMatch": {
    "@id": "http://id.loc.gov/authorities/subjects/sh93008585"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/heterosexism"
    },
    {
      "@id": "http://homosaurus.org/v2/heterosexuals"
    },
    {
      "@id": "http://homosaurus.org/v2/homosexuality"
    }
  ]
},
"Homosexuals" : {
  "@context": {
    "dc": "http://purl.org/dc/terms/",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "skos": "http://www.w3.org/2004/02/skos/core#",
    "xsd": "http://www.w3.org/2001/XMLSchema#"
  },
  "@id": "http://homosaurus.org/v2/homosexuals",
  "@type": "skos:Concept",
  "dc:identifier": "homosexuals",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "rdfs:comment": "Outdated term for lesbians and gay men.",
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/LGBTQHistoricalTerms"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/LGBTQHistoricalTerms"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Homosexuals",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh85061795",
  	"@note": "Gays"
  },
  "skos:related": {
    "@id": "http://homosaurus.org/v2/sexualMinorities",
    "term": "Sexual minorities"
  }
},
"Gender identity" : {
  "@context": {
    "dc": "http://purl.org/dc/terms/",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "skos": "http://www.w3.org/2004/02/skos/core#",
    "xsd": "http://www.w3.org/2001/XMLSchema#"
  },
  "@id": "http://homosaurus.org/v2/genderIdentity",
  "@type": "skos:Concept",
  "dc:identifier": "genderIdentity",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "rdfs:comment": "A person’s experience of having a particular gender, which may or may notcorrespond with the sex they were assigned at birth",
  "skos:altLabel": ["Gender-variant identity"],
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/gender"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/gender"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:narrower": [
    {
      "@id": "http://homosaurus.org/v2/men"
    },
    {
      "@id": "http://homosaurus.org/v2/assignedGender"
    },
    {
      "@id": "http://homosaurus.org/v2/bigenderIdentity"
    },
    {
      "@id": "http://homosaurus.org/v2/culturallySpecificGenderIdentities"
    },
    {
      "@id": "http://homosaurus.org/v2/women"
    },
    {
      "@id": "http://homosaurus.org/v2/pangenderIdentity"
    },
    {
      "@id": "http://homosaurus.org/v2/pronouns"
    },
    {
      "@id": "http://homosaurus.org/v2/genderFluid"
    },
    {
      "@id": "http://homosaurus.org/v2/transgenderIdentity"
    },
    {
      "@id": "http://homosaurus.org/v2/trigenderIdentity"
    }
  ],
  "skos:prefLabel": "Gender identity",
  "skos:exactMatch": {
    "@id": "http://id.loc.gov/authorities/subjects/sh91003756"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/misgendering"
    },
    {
      "@id": "http://homosaurus.org/v2/chosenName"
    },
    {
      "@id": "http://homosaurus.org/v2/cisgenderPeople"
    },
    {
      "@id": "http://homosaurus.org/v2/deadnaming"
    },
    {
      "@id": "http://homosaurus.org/v2/genderBinary"
    },
    {
      "@id": "http://homosaurus.org/v2/genderDiversity"
    },
    {
      "@id": "http://homosaurus.org/v2/genderDysphoria",
      "term": "Gender dysphoria"
    },
    {
      "@id": "http://homosaurus.org/v2/genderExpression",
      "term": "Gender expression"
    },
    {
      "@id": "http://homosaurus.org/v2/genderRoles",
      "term": "Gender roles"
    },
    {
      "@id": "http://homosaurus.org/v2/gendercide"
    },
    {
      "@id": "http://homosaurus.org/v2/genderism"
    },
    {
      "@id": "http://homosaurus.org/v2/givenName"
    },
    {
      "@id": "http://homosaurus.org/v2/transgenderPeople",
      "term": "Transgender people"
    },
    {
      "@id": "http://homosaurus.org/v2/transgenderism",
      "term": "Transgenderism"
    },
    {
      "@id": "http://homosaurus.org/v2/transitioningTransgender"
    },
    {
      "@id": "http://homosaurus.org/v2/LGBTI"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualIdentity"
    },
    {
      "@id": "http://homosaurus.org/v2/roleBehaviour"
    },
    {
      "@id": "http://homosaurus.org/v2/agenderPeople"
    }
  ]
},
"Gender dysphoria" : {
  "@context": {
    "dc": "http://purl.org/dc/terms/",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "skos": "http://www.w3.org/2004/02/skos/core#",
    "xsd": "http://www.w3.org/2001/XMLSchema#"
  },
  "@id": "http://homosaurus.org/v2/genderDysphoria",
  "@type": "skos:Concept",
  "dc:identifier": "genderDysphoria",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "rdfs:comment": "Psychological diagnosis for an incongruence between one’sexperienced/expressed gender and one’s assigned gender",
  "skos:altLabel": ["GID"],
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/medicalisation"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/law"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Gender dysphoria",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh85053731",
  	"@note": "Gender identity disorders"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/pubertyBlockers"
    },
    {
      "@id": "http://homosaurus.org/v2/genderIdentity",
      "term": "Gender identity"
    },
    {
      "@id": "http://homosaurus.org/v2/transgenderPeople",
      "term": "Transgender people"
    },
    {
      "@id": "http://homosaurus.org/v2/transsexualPeople"
    },
    {
      "@id": "http://homosaurus.org/v2/transsexualism"
    }
  ]
},
"Gender expression": {
  "@context": {
    "dc": "http://purl.org/dc/terms/",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "skos": "http://www.w3.org/2004/02/skos/core#",
    "xsd": "http://www.w3.org/2001/XMLSchema#"
  },
  "@id": "http://homosaurus.org/v2/genderExpression",
  "@type": "skos:Concept",
  "dc:identifier": "genderExpression",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "rdfs:comment": "Actions or appearances conveying gender",
  "skos:altLabel": [
    "Gender non-conformity",
    "Gender variance"
  ],
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/gender"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/gender"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:narrower": [
    {
      "@id": "http://homosaurus.org/v2/drag"
    },
    {
      "@id": "http://homosaurus.org/v2/packing"
    },
    {
      "@id": "http://homosaurus.org/v2/androgyny"
    },
    {
      "@id": "http://homosaurus.org/v2/binding"
    },
    {
      "@id": "http://homosaurus.org/v2/crossdressing"
    },
    {
      "@id": "http://homosaurus.org/v2/eonism"
    },
    {
      "@id": "http://homosaurus.org/v2/femininity"
    },
    {
      "@id": "http://homosaurus.org/v2/voiceTherapyTransgender"
    },
    {
      "@id": "http://homosaurus.org/v2/masculinity"
    },
    {
      "@id": "http://homosaurus.org/v2/genderBending"
    },
    {
      "@id": "http://homosaurus.org/v2/genderBlending"
    },
    {
      "@id": "http://homosaurus.org/v2/genderSwapping"
    },
    {
      "@id": "http://homosaurus.org/v2/hairRemoval"
    },
    {
      "@id": "http://homosaurus.org/v2/transvestism"
    },
    {
      "@id": "http://homosaurus.org/v2/tucking"
    }
  ],
  "skos:prefLabel": "Gender expression",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh2011002609"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/bears"
    },
    {
      "@id": "http://homosaurus.org/v2/clothing"
    },
    {
      "@id": "http://homosaurus.org/v2/wolves"
    },
    {
      "@id": "http://homosaurus.org/v2/genderDiversity"
    },
    {
      "@id": "http://homosaurus.org/v2/genderIdentity",
      "term": "Gender identity"
    },
    {
      "@id": "http://homosaurus.org/v2/genderRoles",
      "term": "Gender roles"
    },
    {
      "@id": "http://homosaurus.org/v2/genderfuck"
    },
    {
      "@id": "http://homosaurus.org/v2/transgenderism",
      "term": "Transgenderism"
    },
    {
      "@id": "http://homosaurus.org/v2/LGBTI"
    }
  ]
},
"Gender roles": {
  "@context": {
    "dc": "http://purl.org/dc/terms/",
    "skos": "http://www.w3.org/2004/02/skos/core#",
    "xsd": "http://www.w3.org/2001/XMLSchema#"
  },
  "@id": "http://homosaurus.org/v2/genderRoles",
  "@type": "skos:Concept",
  "dc:identifier": "genderRoles",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/roleBehaviour"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/roleBehaviour"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:narrower": [
    {
      "@id": "http://homosaurus.org/v2/bears"
    },
    {
      "@id": "http://homosaurus.org/v2/butches"
    },
    {
      "@id": "http://homosaurus.org/v2/femmes"
    },
    {
      "@id": "http://homosaurus.org/v2/wolves"
    },
    {
      "@id": "http://homosaurus.org/v2/machismo"
    },
    {
      "@id": "http://homosaurus.org/v2/twinks"
    },
    {
      "@id": "http://homosaurus.org/v2/sissies"
    },
    {
      "@id": "http://homosaurus.org/v2/tomboys"
    }
  ],
  "skos:prefLabel": "Gender roles",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh85120663",
  	"@note": "Sex role"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/androgyny"
    },
    {
      "@id": "http://homosaurus.org/v2/femininity"
    },
    {
      "@id": "http://homosaurus.org/v2/masculinity"
    },
    {
      "@id": "http://homosaurus.org/v2/genderBending"
    },
    {
      "@id": "http://homosaurus.org/v2/genderBinary"
    },
    {
      "@id": "http://homosaurus.org/v2/genderExpression",
      "term": "Gender expression"
    },
    {
      "@id": "http://homosaurus.org/v2/genderIdentity",
      "term": "Gender identity"
    },
    {
      "@id": "http://homosaurus.org/v2/genderRelations"
    },
    {
      "@id": "http://homosaurus.org/v2/genderSwapping"
    },
    {
      "@id": "http://homosaurus.org/v2/sexuality"
    }
  ]
},
"Lesbianism" : {
  "@context": {
    "dc": "http://purl.org/dc/terms/",
    "skos": "http://www.w3.org/2004/02/skos/core#",
    "xsd": "http://www.w3.org/2001/XMLSchema#"
  },
  "@id": "http://homosaurus.org/v2/lesbianism",
  "@type": "skos:Concept",
  "dc:identifier": "lesbianism",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/sexualOrientation",
    "term": "Sexual orientation"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/sexualOrientation"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Lesbianism",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh85076157"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/bisexuality"
    },
    {
      "@id": "http://homosaurus.org/v2/homosexuality"
    }
  ]
},
"Lesbians" : {
  "@context": {
    "dc": "http://purl.org/dc/terms/",
    "skos": "http://www.w3.org/2004/02/skos/core#",
    "xsd": "http://www.w3.org/2001/XMLSchema#"
  },
  "@id": "http://homosaurus.org/v2/lesbians",
  "@type": "skos:Concept",
  "dc:identifier": "lesbians",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:altLabel": [
    "Gay women",
    "Lesbian women"
  ],
  "skos:broader": [
    {
      "@id": "http://homosaurus.org/v2/sexualMinorities",
      "term": "Sexual minorities"
    },
    {
      "@id": "http://homosaurus.org/v2/women"
    },
    {
      "@id": "http://homosaurus.org/v2/LGBTQPeople"
    }
  ],
  "skos:hasTopConcept": [
    {
      "@id": "http://homosaurus.org/v2/sexualOrientation"
    },
    {
      "@id": "http://homosaurus.org/v2/gender"
    },
    {
      "@id": "http://homosaurus.org/v2/LGBTQPeople"
    }
  ],
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:narrower": [
    {
      "@id": "http://homosaurus.org/v2/femmes"
    },
    {
      "@id": "http://homosaurus.org/v2/closetedLesbians"
    },
    {
      "@id": "http://homosaurus.org/v2/olderLesbians"
    },
    {
      "@id": "http://homosaurus.org/v2/lipstickLesbians"
    },
    {
      "@id": "http://homosaurus.org/v2/babyDyke"
    }
  ],
  "skos:prefLabel": "Lesbians",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh85076160"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/queerWomen"
    },
    {
      "@id": "http://homosaurus.org/v2/bois"
    },
    {
      "@id": "http://homosaurus.org/v2/butches"
    },
    {
      "@id": "http://homosaurus.org/v2/dykes"
    },
    {
      "@id": "http://homosaurus.org/v2/fricatrices"
    },
    {
      "@id": "http://homosaurus.org/v2/womenWhoHaveSexWithWomen"
    },
    {
      "@id": "http://homosaurus.org/v2/parentsOfLesbians"
    },
    {
      "@id": "http://homosaurus.org/v2/persecutionOfLesbians"
    },
    {
      "@id": "http://homosaurus.org/v2/homosexuality"
    },
    {
      "@id": "http://homosaurus.org/v2/tribades"
    },
    {
      "@id": "http://homosaurus.org/v2/lesbianCharacters"
    },
    {
      "@id": "http://homosaurus.org/v2/lesbianGirls"
    },
    {
      "@id": "http://homosaurus.org/v2/lesbianIdentity"
    },
    {
      "@id": "http://homosaurus.org/v2/lesbianYouth"
    },
    {
      "@id": "http://homosaurus.org/v2/lesbian-gayRelations"
    },
    {
      "@id": "http://homosaurus.org/v2/softButches"
    },
    {
      "@id": "http://homosaurus.org/v2/stoneButches"
    },
    {
      "@id": "http://homosaurus.org/v2/partnersOfLesbians"
    }
  ]
},
"Masochism": {
  "@context": {
    "dc": "http://purl.org/dc/terms/",
    "skos": "http://www.w3.org/2004/02/skos/core#",
    "xsd": "http://www.w3.org/2001/XMLSchema#"
  },
  "@id": "http://homosaurus.org/v2/masochism",
  "@type": "skos:Concept",
  "dc:identifier": "masochism",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:broader": [
    {
      "@id": "http://homosaurus.org/v2/sexualPreference",
      "term": "Sexual preference"
    },
    {
      "@id": "http://homosaurus.org/v2/BDSM"
    },
    {
      "@id": "http://homosaurus.org/v2/fetishism",
      "term": "Fetishism"
    },
    {
      "@id": "http://homosaurus.org/v2/SM"
    }
  ],
  "skos:hasTopConcept": [
    {
      "@id": "http://homosaurus.org/v2/sexualPreference"
    },
    {
      "@id": "http://homosaurus.org/v2/sexAct"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualPractices"
    }
  ],
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Masochism",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh85081828"
  },
  "skos:closeMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh85120740",
  	"@note": "Sadomasochism"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/sexualIdentity"
    },
    {
      "@id": "http://homosaurus.org/v2/BDSMCommunity"
    },
    {
      "@id": "http://homosaurus.org/v2/bondage"
    },
    {
      "@id": "http://homosaurus.org/v2/sexAct"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualPractices"
    }
  ]
},
"Non-binary people": {
  "@context": {
    "dc": "http://purl.org/dc/terms/",
    "skos": "http://www.w3.org/2004/02/skos/core#",
    "xsd": "http://www.w3.org/2001/XMLSchema#"
  },
  "@id": "http://homosaurus.org/v2/nonBinaryPeople",
  "@type": "skos:Concept",
  "dc:identifier": "nonBinaryPeople",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:altLabel": ["Nonbinary people"],
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/transgenderPeople",
    "term": "Transgender people"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/LGBTQPeople"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Non-binary people",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh2017004882",
  	"@note": "Gender-noncomforming people"
  },
  "skos:closeMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh2007003716",
  	"@note": "Gender nonconformity"
  }
},
"Sexual orientation" : {
  "@context": {
    "dc": "http://purl.org/dc/terms/",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "skos": "http://www.w3.org/2004/02/skos/core#",
    "xsd": "http://www.w3.org/2001/XMLSchema#"
  },
  "@id": "http://homosaurus.org/v2/sexualOrientation",
  "@type": "skos:Concept",
  "dc:identifier": "sexualOrientation",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "rdfs:comment": "The direction of one’s sexual attraction towards the same, opposite, ormultiple sexes, commonly understood to be biologically and physiologically dictated,rather than sociologically.",
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/sexualOrientation"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:narrower": [
    {
      "@id": "http://homosaurus.org/v2/sexualMinorities",
      "term": "Sexual minorities"
    },
    {
      "@id": "http://homosaurus.org/v2/asexuality",
    },
    {
      "@id": "http://homosaurus.org/v2/bisexuality"
    },
    {
      "@id": "http://homosaurus.org/v2/demisexuality"
    },
    {
      "@id": "http://homosaurus.org/v2/heterosexuality",
      "term": "Heterosexuality"
    },
    {
      "@id": "http://homosaurus.org/v2/homosexuality"
    },
    {
      "@id": "http://homosaurus.org/v2/lesbianism",
      "term": "Lesbianism"
    }
  ],
  "skos:prefLabel": "Sexual orientation",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh91005179"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/sexualIdentity"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualMinorities",
      "term": "Sexual minorities"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualPreference",
      "term": "Sexual preference"
    },
    {
      "@id": "http://homosaurus.org/v2/denialOfSexualOrientation"
    },
    {
      "@id": "http://homosaurus.org/v2/gaydar"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualReorientation"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualDiversity"
    }
  ]
},
"Sexual minorities" : {
  "@context": {
    "dc": "http://purl.org/dc/terms/",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "skos": "http://www.w3.org/2004/02/skos/core#",
    "xsd": "http://www.w3.org/2001/XMLSchema#"
  },
  "@id": "http://homosaurus.org/v2/sexualMinorities",
  "@type": "skos:Concept",
  "dc:identifier": "sexualMinorities",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "rdfs:comment": "People whose sexual practices differ from the majority.",
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/sexualOrientation",
    "term": "Sexual orientation"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/sexualOrientation"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:narrower": [
    {
      "@id": "http://homosaurus.org/v2/bisexualPeople"
    },
    {
      "@id": "http://homosaurus.org/v2/demisexualPeople",
      "term": "Demisexual people"
    },
    {
      "@id": "http://homosaurus.org/v2/gayMen",
      "term": "Gay men"
    },
    {
      "@id": "http://homosaurus.org/v2/takatapui"
    },
    {
      "@id": "http://homosaurus.org/v2/tongzhi"
    },
    {
      "@id": "http://homosaurus.org/v2/katoey"
    },
    {
      "@id": "http://homosaurus.org/v2/lesbians",
      "term": "Lesbians"
    },
    {
      "@id": "http://homosaurus.org/v2/two-spiritPeople",
      "term": "Two-spirit people"
    },
    {
      "@id": "http://homosaurus.org/v2/asexualPeople",
      "term": "Asexual people"
    }
  ],
  "skos:prefLabel": "Sexual minorities",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh2004003385"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/LGBTI"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualOrientation",
      "term": "Sexual orientation"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualPreference",
      "term": "Sexual preference"
    },
    {
      "@id": "http://homosaurus.org/v2/womenWhoHaveSexWithWomen"
    },
    {
      "@id": "http://homosaurus.org/v2/uranians"
    },
    {
      "@id": "http://homosaurus.org/v2/menWhoHaveSexWithMen"
    },
    {
      "@id": "http://homosaurus.org/v2/homosexuals",
      "term": "Homosexuals"
    },
    {
      "@id": "http://homosaurus.org/v2/LGBTQPeople"
    },
    {
      "@id": "http://homosaurus.org/v2/sodomites"
    },
    {
      "@id": "http://homosaurus.org/v2/sexuality",
      "term": "Sexuality"
    },
    {
      "@id": "http://homosaurus.org/v2/homophiles"
    },
    {
      "@id": "http://homosaurus.org/v2/inverts"
    }
  ]
},
"Sexual preference" : {
  "@context": {
    "dc": "http://purl.org/dc/terms/",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "skos": "http://www.w3.org/2004/02/skos/core#",
    "xsd": "http://www.w3.org/2001/XMLSchema#"
  },
  "@id": "http://homosaurus.org/v2/sexualPreference",
  "@type": "skos:Concept",
  "dc:identifier": "sexualPreference",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "rdfs:comment": "An enduring pattern of attraction towards a certain sex or multiple sexes,characterization, object, situational fantasy, or behavior, understood to be either orboth a biological dictation and a cultural and/or sociological choice.",
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/sexualPreference"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:narrower": [
    {
      "@id": "http://homosaurus.org/v2/demisexualPeople",
      "term": "Demisexual people"
    },
    {
      "@id": "http://homosaurus.org/v2/ephebophilia"
    },
    {
      "@id": "http://homosaurus.org/v2/fetishism"
    },
    {
      "@id": "http://homosaurus.org/v2/voyeurism",
      "term": "Voyeurism"
    },
    {
      "@id": "http://homosaurus.org/v2/masochism"
    },
    {
      "@id": "http://homosaurus.org/v2/partnerPreference"
    },
    {
      "@id": "http://homosaurus.org/v2/pederasts"
    },
    {
      "@id": "http://homosaurus.org/v2/sadism"
    },
    {
      "@id": "http://homosaurus.org/v2/gerontophilia"
    },
    {
      "@id": "http://homosaurus.org/v2/hebephilia"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualRoles"
    }
  ],
  "skos:prefLabel": "Sexual preference",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh91005179",
  	"@note": "Sexual orientation"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/bondage"
    },
    {
      "@id": "http://homosaurus.org/v2/casualSex"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualAutonomy"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualBehaviourChange"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualMinorities",
      "term": "Sexual minorities"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualOrientation",
      "term": "Sexual orientation"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualRelationships"
    },
    {
      "@id": "http://homosaurus.org/v2/significantOthers"
    },
    {
      "@id": "http://homosaurus.org/v2/vampirism"
    },
    {
      "@id": "http://homosaurus.org/v2/virginity"
    },
    {
      "@id": "http://homosaurus.org/v2/pederasty"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualInversion"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualIdentity"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualReorientation"
    },
    {
      "@id": "http://homosaurus.org/v2/situationalSexualBehaviour"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualDiversity"
    },
    {
      "@id": "http://homosaurus.org/v2/partnersLGBTQ"
    }
  ]
},
"Sexuality" : {
  "@context": {
    "dc": "http://purl.org/dc/terms/",
    "skos": "http://www.w3.org/2004/02/skos/core#",
    "xsd": "http://www.w3.org/2001/XMLSchema#"
  },
  "@id": "http://homosaurus.org/v2/sexuality",
  "@type": "skos:Concept",
  "dc:identifier": "sexuality",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/sexuality"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:narrower": [
    {
      "@id": "http://homosaurus.org/v2/childrensSexuality"
    },
    {
      "@id": "http://homosaurus.org/v2/organisationsForSexualResearchAndSex"
    }
  ],
  "skos:prefLabel": "Sexuality",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh85120549",
  	"@note": "Sex"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/sexAccessories"
    },
    {
      "@id": "http://homosaurus.org/v2/sexIndustry"
    },
    {
      "@id": "http://homosaurus.org/v2/sexology"
    },
    {
      "@id": "http://homosaurus.org/v2/sexting"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualAbstinence"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualAutonomy"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualMinorities",
      "term": "Sexual minorities"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualPractices"
    },
    {
      "@id": "http://homosaurus.org/v2/situationalSexualBehaviour"
    },
    {
      "@id": "http://homosaurus.org/v2/anonymousSex"
    },
    {
      "@id": "http://homosaurus.org/v2/casualSex"
    },
    {
      "@id": "http://homosaurus.org/v2/cybersex"
    },
    {
      "@id": "http://homosaurus.org/v2/eroticism"
    },
    {
      "@id": "http://homosaurus.org/v2/pornography"
    },
    {
      "@id": "http://homosaurus.org/v2/publicSex"
    },
    {
      "@id": "http://homosaurus.org/v2/genderRoles",
      "term": "Gender roles"
    },
    {
      "@id": "http://homosaurus.org/v2/genderStudies"
    },
    {
      "@id": "http://homosaurus.org/v2/groupSex"
    },
    {
      "@id": "http://homosaurus.org/v2/hypersexuality"
    },
    {
      "@id": "http://homosaurus.org/v2/LGBTQCravings"
    },
    {
      "@id": "http://homosaurus.org/v2/libido"
    },
    {
      "@id": "http://homosaurus.org/v2/seduction"
    },
    {
      "@id": "http://homosaurus.org/v2/sexAct"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualDysfunction"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualExcitement"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualReform"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualRoles"
    },
    {
      "@id": "http://homosaurus.org/v2/sexClubs"
    },
    {
      "@id": "http://homosaurus.org/v2/sexLocations"
    },
    {
      "@id": "http://homosaurus.org/v2/sexParties"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualAddiction"
    },
    {
      "@id": "http://homosaurus.org/v2/orgasm"
    }
  ]
},
"Transgenderism" : {
  "@context": {
    "dc": "http://purl.org/dc/terms/",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "skos": "http://www.w3.org/2004/02/skos/core#",
    "xsd": "http://www.w3.org/2001/XMLSchema#"
  },
  "@id": "http://homosaurus.org/v2/transgenderism",
  "@type": "skos:Concept",
  "dc:identifier": "transgenderism",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "rdfs:comment": "Pathologizing term often used in the medicalization of transgender people; use only in historical context",
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/medicalisation"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/law"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:narrower": {
    "@id": "http://homosaurus.org/v2/transsexualism"
  },
  "skos:prefLabel": "Transgenderism",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh2007003716",
  	"@note": "Gender nonconformity"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/gender"
    },
    {
      "@id": "http://homosaurus.org/v2/genderExpression",
      "term": "Gender expression"
    },
    {
      "@id": "http://homosaurus.org/v2/genderIdentity",
      "term": "Gender identity"
    },
    {
      "@id": "http://homosaurus.org/v2/intersex"
    },
    {
      "@id": "http://homosaurus.org/v2/transgenderInformationCentres"
    },
    {
      "@id": "http://homosaurus.org/v2/transgenderMovement"
    },
    {
      "@id": "http://homosaurus.org/v2/transgenderPeople",
      "term": "Transgender people"
    },
    {
      "@id": "http://homosaurus.org/v2/transgenderStudies"
    },
    {
      "@id": "http://homosaurus.org/v2/LGBTI"
    }
  ]
},
"Transgender people" : {
  "@context": {
    "dc": "http://purl.org/dc/terms/",
    "skos": "http://www.w3.org/2004/02/skos/core#",
    "xsd": "http://www.w3.org/2001/XMLSchema#"
  },
  "@id": "http://homosaurus.org/v2/transgenderPeople",
  "@type": "skos:Concept",
  "dc:identifier": "transgenderPeople",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:altLabel": [
    "Trans*",
    "Transgendered people"
  ],
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/LGBTQPeople"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/LGBTQPeople"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:narrower": [
    {
      "@id": "http://homosaurus.org/v2/mtxs"
    },
    {
      "@id": "http://homosaurus.org/v2/pangenderPeople"
    },
    {
      "@id": "http://homosaurus.org/v2/androgynePeople"
    },
    {
      "@id": "http://homosaurus.org/v2/bigenderPeople"
    },
    {
      "@id": "http://homosaurus.org/v2/crossdressers"
    },
    {
      "@id": "http://homosaurus.org/v2/demigenderPeople"
    },
    {
      "@id": "http://homosaurus.org/v2/eonistPeople"
    },
    {
      "@id": "http://homosaurus.org/v2/ftxs"
    },
    {
      "@id": "http://homosaurus.org/v2/thirdGenderPeople"
    },
    {
      "@id": "http://homosaurus.org/v2/olderTransgenderPeople"
    },
    {
      "@id": "http://homosaurus.org/v2/transfemininePeople"
    },
    {
      "@id": "http://homosaurus.org/v2/genderFluidPeople"
    },
    {
      "@id": "http://homosaurus.org/v2/genderNonConformingPeople"
    },
    {
      "@id": "http://homosaurus.org/v2/genderqueerPeople"
    },
    {
      "@id": "http://homosaurus.org/v2/transgenderChildren"
    },
    {
      "@id": "http://homosaurus.org/v2/transgenderDaughters"
    },
    {
      "@id": "http://homosaurus.org/v2/transgenderYouth"
    },
    {
      "@id": "http://homosaurus.org/v2/transmasculinePeople"
    },
    {
      "@id": "http://homosaurus.org/v2/transsexualPeople"
    },
    {
      "@id": "http://homosaurus.org/v2/transvestites"
    },
    {
      "@id": "http://homosaurus.org/v2/trigenderPeople"
    },
    {
      "@id": "http://homosaurus.org/v2/nonBinaryPeople"
    },
    {
      "@id": "http://homosaurus.org/v2/agenderPeople"
    }
  ],
  "skos:prefLabel": "Transgender people",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh2007003708"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/genderConfirmingSurgery"
    },
    {
      "@id": "http://homosaurus.org/v2/medicalPractitionersStatements"
    },
    {
      "@id": "http://homosaurus.org/v2/men"
    },
    {
      "@id": "http://homosaurus.org/v2/noHormoneIdentity"
    },
    {
      "@id": "http://homosaurus.org/v2/nonOperative"
    },
    {
      "@id": "http://homosaurus.org/v2/postOperative"
    },
    {
      "@id": "http://homosaurus.org/v2/preOperative"
    },
    {
      "@id": "http://homosaurus.org/v2/socialSecurityCards"
    },
    {
      "@id": "http://homosaurus.org/v2/birthCertificates"
    },
    {
      "@id": "http://homosaurus.org/v2/cisgenderPeople"
    },
    {
      "@id": "http://homosaurus.org/v2/driversLicenses"
    },
    {
      "@id": "http://homosaurus.org/v2/women"
    },
    {
      "@id": "http://homosaurus.org/v2/partnersOfTransgenderPeople"
    },
    {
      "@id": "http://homosaurus.org/v2/passingGender"
    },
    {
      "@id": "http://homosaurus.org/v2/passports"
    },
    {
      "@id": "http://homosaurus.org/v2/persecutionOfTransgenderPeople"
    },
    {
      "@id": "http://homosaurus.org/v2/pronouns"
    },
    {
      "@id": "http://homosaurus.org/v2/genderDysphoria",
      "term": "Gender dysphoria"
    },
    {
      "@id": "http://homosaurus.org/v2/genderIdentity",
      "term": "Gender identity"
    },
    {
      "@id": "http://homosaurus.org/v2/genderIdentityDisorder"
    },
    {
      "@id": "http://homosaurus.org/v2/genderMarkers"
    },
    {
      "@id": "http://homosaurus.org/v2/transgenderCharacters"
    },
    {
      "@id": "http://homosaurus.org/v2/transgenderCommunity"
    },
    {
      "@id": "http://homosaurus.org/v2/hormoneTherapyGender"
    },
    {
      "@id": "http://homosaurus.org/v2/transgenderCommunityCentres"
    },
    {
      "@id": "http://homosaurus.org/v2/transgenderFathers"
    },
    {
      "@id": "http://homosaurus.org/v2/transgenderIdentity"
    },
    {
      "@id": "http://homosaurus.org/v2/transgenderMothers"
    },
    {
      "@id": "http://homosaurus.org/v2/transgenderParents"
    },
    {
      "@id": "http://homosaurus.org/v2/transgenderSons"
    },
    {
      "@id": "http://homosaurus.org/v2/transgenderism",
      "term": "Transgenderism"
    },
    {
      "@id": "http://homosaurus.org/v2/transitioningTransgender"
    },
    {
      "@id": "http://homosaurus.org/v2/transitioningStatus"
    },
    {
      "@id": "http://homosaurus.org/v2/parentsOfTransgenderPeople"
    },
    {
      "@id": "http://homosaurus.org/v2/stealthTransgender"
    }
  ]
},
"Two-spirit people" : {
  "@context": {
    "dc": "http://purl.org/dc/terms/",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "skos": "http://www.w3.org/2004/02/skos/core#",
    "xsd": "http://www.w3.org/2001/XMLSchema#"
  },
  "@id": "http://homosaurus.org/v2/two-spiritPeople",
  "@type": "skos:Concept",
  "dc:identifier": "two-spiritPeople",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "rdfs:comment": "Self-identifying term used by indigenous people in North America to reconnect with the multiple gender and sexual roles in Native cultures",
  "skos:broader": [
    {
      "@id": "http://homosaurus.org/v2/sexualMinorities",
      "term": "Sexual minorities"
    },
    {
      "@id": "http://homosaurus.org/v2/culturallySpecificGenderIdentities"
    }
  ],
  "skos:hasTopConcept": [
    {
      "@id": "http://homosaurus.org/v2/sexualOrientation"
    },
    {
      "@id": "http://homosaurus.org/v2/gender"
    }
  ],
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Two-spirit people",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh95004103"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/nadleehi"
    },
    {
      "@id": "http://homosaurus.org/v2/nativeAmericansLGBTQ"
    },
    {
      "@id": "http://homosaurus.org/v2/ninauposkitzipxpe"
    },
    {
      "@id": "http://homosaurus.org/v2/quariwarmi"
    },
    {
      "@id": "http://homosaurus.org/v2/alyha"
    },
    {
      "@id": "http://homosaurus.org/v2/berdache"
    },
    {
      "@id": "http://homosaurus.org/v2/dilbaa"
    },
    {
      "@id": "http://homosaurus.org/v2/winkte"
    },
    {
      "@id": "http://homosaurus.org/v2/tidaWena"
    },
    {
      "@id": "http://homosaurus.org/v2/niizhManidoowag"
    },
    {
      "@id": "http://homosaurus.org/v2/hwame"
    },
    {
      "@id": "http://homosaurus.org/v2/LGBTQIndigenousPeople"
    },
    {
      "@id": "http://homosaurus.org/v2/lhamana"
    }
  ]
},
"Voyeurism" : {
  "@context": {
    "dc": "http://purl.org/dc/terms/",
    "skos": "http://www.w3.org/2004/02/skos/core#",
    "xsd": "http://www.w3.org/2001/XMLSchema#"
  },
  "@id": "http://homosaurus.org/v2/voyeurism",
  "@type": "skos:Concept",
  "dc:identifier": "voyeurism",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:altLabel": [
    {"term": "Scopophilia"},
    {"term": "Scoptophilia"}
  ],
  "skos:broader": [
    {
      "@id": "http://homosaurus.org/v2/sexualPreference",
      "term": "Sexual preference"
    },
    {
      "@id": "http://homosaurus.org/v2/fetishism"
    },
    {
      "@id": "http://homosaurus.org/v2/sexAct"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualPractices"
    }
  ],
  "skos:hasTopConcept": [
    {
      "@id": "http://homosaurus.org/v2/sexualPreference"
    },
    {
      "@id": "http://homosaurus.org/v2/sexAct"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualPractices"
    }
  ],
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Voyeurism",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh85118773"
  }
}
}

function collect(){
    var itemListRelated = [];
    var itemListBroader = [];
    var itemListNarrower = [];
    var itemListAlt = [];
    var n = event.target.innerText
    //collect "skos:prefLabel" term and "skos:exactMatch" terms
    if (homosaurus[n]){
      if (homosaurus[n]["skos:exactMatch"]){
        	if (homosaurus[n]["skos:exactMatch"]["@note"]){
        		var newN = homosaurus[n]["skos:exactMatch"]["@note"].replace(/ /g,'+')
        		var searchTerm = homosaurus[n]["skos:exactMatch"]["@note"]
        	}
        	else{
		        var newN = homosaurus[n]["skos:prefLabel"].replace(/ /g,'+')
		        var searchTerm = homosaurus[n]["skos:prefLabel"]
		    }
        document.getElementById("preferred").innerHTML = "<a href=\"https://iucat.iu.edu/?utf8=&#10004;&search_field=subject&q=" + newN + '\">' + homosaurus[n]["skos:prefLabel"] + "</a>"
        document.getElementById("lcsh").innerHTML = "<a href=\"https://iucat.iu.edu/?utf8=&#10004;&search_field=subject&q=" + newN + '\">' + searchTerm + "</a>"
      }
      else{
        document.getElementById("preferred").innerHTML = homosaurus[n]["skos:prefLabel"]
        document.getElementById("lcsh").innerHTML = ""
      }
    }
    else {
      document.getElementById("preferred").innerHTML = ""
      document.getElementById("lcsh").innerHTML = ""
      while(itemListNarrower.length){
        itemListNarrower.pop();
      }
      document.getElementById("narrower").innerHTML = ""
      while(itemListBroader.length){
        itemListBroader.pop();
      }
      document.getElementById("broader").innerHTML = ""
      while(itemListRelated.length){
        itemListRelated.pop();
      }
      document.getElementById("related").innerHTML = ""
      while(itemListAlt.length){
        itemListAlt.pop();
      }
      document.getElementById("alt").innerHTML = ""
    }
    //collect "skos:related" terms
    if(homosaurus[n]["skos:related"]){
      if(homosaurus[n]["skos:related"].length > 1){
        for (i = 0; i < homosaurus[n]["skos:related"].length; i ++){
          var p = document.createElement('P')
          if (homosaurus[n]["skos:related"][i]["term"]){
            p.innerHTML = homosaurus[n]["skos:related"][i]["term"]
            p.addEventListener("onclick", collect)
            itemListRelated.push(p);
          }
          else {
            p.innerHTML = homosaurus[n]["skos:related"][i]["@id"]
            p.addEventListener("onclick", collect)
            itemListRelated.push(p);
          }
        }
      } else {var p = document.createElement('P')
          if (homosaurus[n]["skos:related"]["term"]){
            p.innerHTML = homosaurus[n]["skos:related"]["term"]
            p.addEventListener("onclick", collect)
            itemListRelated.push(p);}
          else {
            p.innerHTML = homosaurus[n]["skos:related"]["@id"]
            p.addEventListener("onclick", collect)
            itemListRelated.push(p);}
        }
      document.getElementById("related").innerHTML = ''
      itemListRelated.forEach((x)=>{
        document.getElementById("related").append(x)})
    } else {var p = document.createElement('P')
        p.innerHTML = ""
        while(itemListRelated.length){
          itemListRelated.pop();
        }
        itemListRelated.getElementById("related").innerHTML = "";
      }

    
    //collect "skos:broader" terms
    if(homosaurus[n]["skos:broader"]){
      if(homosaurus[n]["skos:broader"].length > 1){
        for (i = 0; i < homosaurus[n]["skos:broader"].length; i ++){
          var p = document.createElement('P')
          if (homosaurus[n]["skos:broader"][i]["term"]){
            p.innerHTML = homosaurus[n]["skos:broader"][i]["term"]
            p.addEventListener("onclick", collect)
            itemListBroader.push(p);}
          else {p.innerHTML = homosaurus[n]["skos:broader"][i]["@id"]
            p.addEventListener("onclick", collect)
            itemListBroader.push(p);}
          }
      } else {var p = document.createElement('P')
          if (homosaurus[n]["skos:broader"]["term"]){
            p.innerHTML = homosaurus[n]["skos:broader"]["term"]
            p.addEventListener("onclick", collect)
            itemListBroader.push(p);}
          else {
            p.innerHTML = homosaurus[n]["skos:broader"]["@id"]
            p.addEventListener("onclick", collect)
            itemListBroader.push(p);}
          } 
          document.getElementById("broader").innerHTML = ''
          itemListBroader.forEach((x)=>{
            document.getElementById("broader").append(x)
          })
    } else {var p = document.createElement('P')
        p.innerHTML = ""
        while(itemListBroader.length){
          itemListBroader.pop();
        }
        document.getElementById("broader").innerHTML = "";
      }

    //collect "skos:narrower" terms
    if(homosaurus[n]["skos:narrower"]){
      if(homosaurus[n]["skos:narrower"].length > 1){
        for (i = 0; i < homosaurus[n]["skos:narrower"].length; i ++){
          var p = document.createElement('P')
          if (homosaurus[n]["skos:narrower"][i]["term"]){
            p.innerHTML = homosaurus[n]["skos:narrower"][i]["term"]
            p.addEventListener("onclick", collect)
            itemListNarrower.push(p);
          }
          else {p.innerHTML = homosaurus[n]["skos:narrower"][i]["@id"]
            p.addEventListener("onclick", collect)
            itemListNarrower.push(p);
          }
        }
      } else {var p = document.createElement('P')
      if (homosaurus[n]["skos:narrower"]["term"]){
        p.innerHTML = homosaurus[n]["skos:narrower"]["term"]
        p.addEventListener("onclick", collect)
        itemListNarrower.push(p);}
      else {
        p.innerHTML = homosaurus[n]["skos:narrower"]["@id"]
        p.addEventListener("onclick", collect)
        itemListNarrower.push(p);}
      } 
      document.getElementById("narrower").innerHTML = ''
      itemListNarrower.forEach((x)=>{
        document.getElementById("narrower").append(x)
      })
    } else {var p = document.createElement('P')
        p.innerHTML = ""
        while(itemListNarrower.length){
          itemListNarrower.pop();
        }
        document.getElementById("narrower").innerHTML = ""
      }
    //collect "skos:altLabel" terms
    //if(homosaurus[n]){
    //  if(homosaurus[n]["skos:altLabel"].length > 1){
    //    for (i = 0; i < homosaurus[n]["skos:altLabel"].length; i ++){
    //      var p = document.createElement('P')
    //      if (homosaurus[n]["skos:altLabel"][i]["term"]){
    //        p.innerHTML = homosaurus[n]["skos:altLabel"][i]["term"]
    //        itemListAlt.push(p);
    //      }
    //      else {p.innerHTML = homosaurus[n]["skos:altLabel"][i]
    //        itemListAlt.push(p);
    //      }
    //    }
    //  } else {var p = document.createElement('P')
    //      if (homosaurus[n]["skos:altLabel"]["term"]){
    //        p.innerHTML = homosaurus[n]["skos:altLabel"]["term"]
    //        itemListAlt.push(p);}
    //      else {
    //        p.innerHTML = homosaurus[n]["skos:altLabel"]
    //        itemListAlt.push(p);}
    //      } 
    //} else {var p = document.createElement('P')
    //    p.innerHTML = ""
    //    itemListAlt.push(p);
    //  }
    //document.getElementById("alt").innerHTML = ''
    //itemListAlt.forEach((x)=>{
    //  document.getElementById("alt").append(x)
    //})
    if(homosaurus[n]){
      if(homosaurus[n]["skos:altLabel"]){
        homosaurus[n]["skos:altLabel"].forEach((x)=>{
          var p = document.createElement('P')
          p.innerHTML = "<a href=\"https://iucat.iu.edu/?utf8=✓&search_field=all_field&q=" + x + '\">' + x + "</a>"
          itemListAlt.push(p)
        })
        itemListAlt.forEach((x)=>{
          document.getElementById("alt").append(x)
        })
      }
      else {
        var p = document.createElement('P')
        p.innerHTML = ""
        itemListAlt.length = 0
        itemListAlt.push(p)
        }
        document.getElementById("alt").innerHTML = ''
        itemListAlt.forEach((x)=>{
          document.getElementById("alt").append(x)})
      }
      else{
        document.getElementById("alt").innerHTML = ""
      }
    
}