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
  "Bears" : {
  
  "@id": "http://homosaurus.org/v2/bears",
  "@type": "skos:Concept",
  "dc:identifier": "bears",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:altLabel": "Bear men",
  "skos:broader": [
    {
      "@id": "http://homosaurus.org/v2/gayCulture"
    },
    {
      "@id": "http://homosaurus.org/v2/gayMen"
    },
    {
      "@id": "http://homosaurus.org/v2/genderRoles"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualIdentity"
    }
  ],
  "skos:hasTopConcept": [
    {
      "@id": "http://homosaurus.org/v2/subcultures"
    },
    {
      "@id": "http://homosaurus.org/v2/gender"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualOrientation"
    },
    {
      "@id": "http://homosaurus.org/v2/LGBTQPeople"
    },
    {
      "@id": "http://homosaurus.org/v2/roleBehaviour"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualIdentity"
    }
  ],
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:narrower": {
    "@id": "http://homosaurus.org/v2/cubs"
  },
  "skos:prefLabel": "Bears",
  "skos:exactMatch": {
        "@id": "http://id.loc.gov/authorities/subjects/sh85012691"
      },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/otters"
    },
    {
      "@id": "http://homosaurus.org/v2/wolves"
    },
    {
      "@id": "http://homosaurus.org/v2/genderExpression"
    },
    {
      "@id": "http://homosaurus.org/v2/goldilocks"
    }
  ]
},
  "Behavioural therapy" : {
  
  "@id": "http://homosaurus.org/v2/behaviouralTherapy",
  "@type": "skos:Concept",
  "dc:identifier": "behaviouralTherapy",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/therapies"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/law"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:narrower": {
    "@id": "http://homosaurus.org/v2/aversionTherapy"
  },
  "skos:prefLabel": "Behavioural therapy",
  "skos:exactMatch": {
        "@id": "http://id.loc.gov/authorities/subjects/sh85012900",
        "@note": "Behavior therapy"
      }
},
  "Biphobia" : {
  
  "@id": "http://homosaurus.org/v2/biphobia",
  "@type": "skos:Concept",
  "dc:identifier": "biphobia",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/LGBTQPhobia"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/LGBTQPhobia"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Biphobia",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh2012001037"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/bisexuality"
    },
    {
      "@id": "http://homosaurus.org/v2/heterosexism"
    }
  ]
},
  "Birth certificates" : {
  
  "@id": "http://homosaurus.org/v2/birthCertificates",
  "@type": "skos:Concept",
  "dc:identifier": "birthCertificates",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/officialDocumentation"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/legalStatus"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:narrower": [
    {
      "@id": "http://homosaurus.org/v2/birthCertificateAmendments"
    },
    {
      "@id": "http://homosaurus.org/v2/genderMarkers"
    }
  ],
  "skos:prefLabel": "Birth certificates",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh85014366"
  },	
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/medicalPractitionersStatements"
    },
    {
      "@id": "http://homosaurus.org/v2/socialSecurityCards"
    },
    {
      "@id": "http://homosaurus.org/v2/courtOrders"
    },
    {
      "@id": "http://homosaurus.org/v2/legalName"
    },
    {
      "@id": "http://homosaurus.org/v2/legalNameChange"
    },
    {
      "@id": "http://homosaurus.org/v2/transgenderPeople"
    },
    {
      "@id": "http://homosaurus.org/v2/transitioningTransgender"
    }
  ]
},
  "Birth parents" : {
  
  "@id": "http://homosaurus.org/v2/birthParents",
  "@type": "skos:Concept",
  "dc:identifier": "birthParents",
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
      "@id": "http://homosaurus.org/v2/gestationalParenthood"
    },
    {
      "@id": "http://homosaurus.org/v2/parentsLGBTQ"
    }
  ],
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/familyMembers"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:narrower": {
    "@id": "http://homosaurus.org/v2/LGBTQBirthParents"
  },
  "skos:prefLabel": "Birth parents",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh85014394",
  	"@term": "Birthparents"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/adoptiveParents"
    },
    {
      "@id": "http://homosaurus.org/v2/biologicalParenthood"
    },
    {
      "@id": "http://homosaurus.org/v2/gestationalParenthood"
    },
    {
      "@id": "http://homosaurus.org/v2/LGBTQAdoption"
    },
    {
      "@id": "http://homosaurus.org/v2/LGBTQAdoptiveParents"
    },
    {
      "@id": "http://homosaurus.org/v2/LGBTQBiologicalParents"
    },
    {
      "@id": "http://homosaurus.org/v2/LGBTQConception"
    }
  ]
},
  "Bisexual Jews" : {
  
  "@id": "http://homosaurus.org/v2/bisexualJews",
  "@type": "skos:Concept",
  "dc:identifier": "bisexualJews",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/jewsLGBTQ"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/LGBTQEthnicGroups"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Bisexual Jews",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh2019000135",
  	"@note": "Jewish bisexuals"
  }
},
  "Bisexual men" : {
  
  "@id": "http://homosaurus.org/v2/bisexualMen",
  "@type": "skos:Concept",
  "dc:identifier": "bisexualMen",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:altLabel": "Male bisexuals",
  "skos:broader": [
    {
      "@id": "http://homosaurus.org/v2/men"
    },
    {
      "@id": "http://homosaurus.org/v2/bisexualPeople"
    }
  ],
  "skos:hasTopConcept": [
    {
      "@id": "http://homosaurus.org/v2/gender"
    },
    {
      "@id": "http://homosaurus.org/v2/LGBTQPeople"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualOrientation"
    }
  ],
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Bisexual men",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh93002510"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/queerMen"
    },
    {
      "@id": "http://homosaurus.org/v2/menWhoHaveSexWithMen"
    }
  ]
},
  "Bisexual parents" : {
  
  "@id": "http://homosaurus.org/v2/bisexualParents",
  "@type": "skos:Concept",
  "dc:identifier": "bisexualParents",
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
      "@id": "http://homosaurus.org/v2/bisexualPeople"
    },
    {
      "@id": "http://homosaurus.org/v2/parentsLGBTQ"
    }
  ],
  "skos:hasTopConcept": [
    {
      "@id": "http://homosaurus.org/v2/LGBTQPeople"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualOrientation"
    },
    {
      "@id": "http://homosaurus.org/v2/familyMembers"
    }
  ],
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Bisexual parents",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh98004191"
  },
  "skos:related": {
    "@id": "http://homosaurus.org/v2/childrenOfBisexualPeople"
  }
},
  "Bisexual women" : {
  
  "@id": "http://homosaurus.org/v2/bisexualWomen",
  "@type": "skos:Concept",
  "dc:identifier": "bisexualWomen",
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
      "@id": "http://homosaurus.org/v2/bisexualPeople"
    },
    {
      "@id": "http://homosaurus.org/v2/women"
    }
  ],
  "skos:hasTopConcept": [
    {
      "@id": "http://homosaurus.org/v2/LGBTQPeople"
    },
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
  "skos:narrower": {
    "@id": "http://homosaurus.org/v2/mati"
  },
  "skos:prefLabel": "Bisexual women",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh93002512"
  },
  "skos:related": {
    "@id": "http://homosaurus.org/v2/womenWhoHaveSexWithWomen"
  }
},
  "Bisexual youth" : {
  
  "@id": "http://homosaurus.org/v2/bisexualYouth",
  "@type": "skos:Concept",
  "dc:identifier": "bisexualYouth",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:altLabel": "Bisexual teenagers",
  "skos:broader": [
    {
      "@id": "http://homosaurus.org/v2/bisexualPeople"
    },
    {
      "@id": "http://homosaurus.org/v2/youthLGBTQ"
    }
  ],
  "skos:hasTopConcept": [
    {
      "@id": "http://homosaurus.org/v2/LGBTQPeople"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualOrientation"
    },
    {
      "@id": "http://homosaurus.org/v2/youth"
    }
  ],
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:narrower": [
    {
      "@id": "http://homosaurus.org/v2/bisexualBoys"
    },
    {
      "@id": "http://homosaurus.org/v2/bisexualGirls"
    }
  ],
  "skos:prefLabel": "Bisexual youth",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh97003789"
  },
  "skos:related": {
    "@id": "http://homosaurus.org/v2/bisexualYouthLiterature"
  }
},
  "Blindfolds" : {
  "@context": {
    "dc": "http://purl.org/dc/terms/",
    "skos": "http://www.w3.org/2004/02/skos/core#",
    "xsd": "http://www.w3.org/2001/XMLSchema#"
  },
  "@id": "http://homosaurus.org/v2/blindfolds",
  "@type": "skos:Concept",
  "dc:identifier": "blindfolds",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/sexAccessories"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/sexAccessories"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Blindfolds",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh2003009027"
  }
},
  "Blogs" : {
  "@context": {
    "dc": "http://purl.org/dc/terms/",
    "rdfs": "http://www.w3.org/2000/01/rdf-schema#",
    "skos": "http://www.w3.org/2004/02/skos/core#",
    "xsd": "http://www.w3.org/2001/XMLSchema#"
  },
  "@id": "http://homosaurus.org/v2/blogs",
  "@type": "skos:Concept",
  "dc:identifier": "blogs",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "rdfs:comment": "A website or webpage, typically run by an individual or small group, that iswritten in an informal or conversational style.",
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/socialMedia"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/socialMedia"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:narrower": {
    "@id": "http://homosaurus.org/v2/LGBTQBlogs"
  },
  "skos:prefLabel": "Blogs",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh2003004628"
  }
},
  "Boys" : {
  
  "@id": "http://homosaurus.org/v2/boys",
  "@type": "skos:Concept",
  "dc:identifier": "boys",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/boys"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:narrower": [
    {
      "@id": "http://homosaurus.org/v2/bisexualBoys"
    },
    {
      "@id": "http://homosaurus.org/v2/gayBoys"
    },
    {
      "@id": "http://homosaurus.org/v2/heterosexualBoys"
    },
    {
      "@id": "http://homosaurus.org/v2/sissies"
    }
  ],
  "skos:prefLabel": "Boys",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh85016211"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/boysFriendships"
    },
    {
      "@id": "http://homosaurus.org/v2/genderBinary"
    }
  ]
},
  "Breasts" : {
  
  "@id": "http://homosaurus.org/v2/breasts",
  "@type": "skos:Concept",
  "dc:identifier": "breasts",
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
      "@id": "http://homosaurus.org/v2/secondarySexCharacteristics"
    },
    {
      "@id": "http://homosaurus.org/v2/erogenousBodyParts"
    }
  ],
  "skos:hasTopConcept": [
    {
      "@id": "http://homosaurus.org/v2/sexBody"
    },
    {
      "@id": "http://homosaurus.org/v2/erogenousBodyParts"
    }
  ],
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Breasts",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh85016677",
  	"@note": "Breast"
  },
  "skos:related": {
    "@id": "http://homosaurus.org/v2/binding"
  }
},
  "Brothels" : {
  
  "@id": "http://homosaurus.org/v2/brothels",
  "@type": "skos:Concept",
  "dc:identifier": "brothels",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/sexIndustry"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/sexIndustry"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Brothels",
  "skos:exactMatch": {
  	"@id:": "http://id.loc.gov/authorities/subjects/sh2005004145"
  },
  "skos:related": {
    "@id": "http://homosaurus.org/v2/prostitution"
  }
},
  "Bullying" : {
  
  "@id": "http://homosaurus.org/v2/bullying",
  "@type": "skos:Concept",
  "dc:identifier": "bullying",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "rdfs:comment": "Form of aggressive behaviour, which can include verbal harassment, physicalassault or coercion and maybe directed repeatedly towards particular victims, perhaps ongrounds of race, gender, sexuality, or ability",
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/bullying"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:narrower": {
    "@id": "http://homosaurus.org/v2/cyberbullying"
  },
  "skos:prefLabel": "Bullying",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh89006054"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/LGBTQPhobia"
    },
    {
      "@id": "http://homosaurus.org/v2/harassment"
    },
    {
      "@id": "http://homosaurus.org/v2/lesbophobia"
    }
  ]
},
  "Buttocks" : {
  
  "@id": "http://homosaurus.org/v2/buttocks",
  "@type": "skos:Concept",
  "dc:identifier": "buttocks",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/erogenousBodyParts"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/erogenousBodyParts"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Buttocks",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh85018392"
  }
},
  "Castration" : {
  
  "@id": "http://homosaurus.org/v2/castration",
  "@type": "skos:Concept",
  "dc:identifier": "castration",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/castration"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:narrower": [
    {
      "@id": "http://homosaurus.org/v2/orchiectomy"
    },
    {
      "@id": "http://homosaurus.org/v2/penectomy"
    },
    {
      "@id": "http://homosaurus.org/v2/forcedCastration"
    }
  ],
  "skos:prefLabel": "Castration",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh85020752"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/eunuchs"
    },
    {
      "@id": "http://homosaurus.org/v2/consent"
    }
  ]
},
  "Celibacy" : {
  
  "@id": "http://homosaurus.org/v2/celibacy",
  "@type": "skos:Concept",
  "dc:identifier": "celibacy",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/celibacy"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Celibacy",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh85021634"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/queerClergy"
    },
    {
      "@id": "http://homosaurus.org/v2/bisexualClergy"
    },
    {
      "@id": "http://homosaurus.org/v2/gayClergy"
    },
    {
      "@id": "http://homosaurus.org/v2/transgenderClergy"
    },
    {
      "@id": "http://homosaurus.org/v2/lesbianClergy"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualAbstinence"
    },
    {
      "@id": "http://homosaurus.org/v2/asexualPeople"
    }
  ]
},
  "Censorship" : {
  
  "@id": "http://homosaurus.org/v2/censorship",
  "@type": "skos:Concept",
  "dc:identifier": "censorship",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/censorship"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:narrower": {
    "@id": "http://homosaurus.org/v2/LGBTQCensorship"
  },
  "skos:prefLabel": "Censorship",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh85021828"
  }
},
  "Child custody" : {
  
  "@id": "http://homosaurus.org/v2/childCustody",
  "@type": "skos:Concept",
  "dc:identifier": "childCustody",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:altLabel": [
    "Guardianship",
    "Parental custody",
    "Tutelage"
  ],
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/childCustody"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Child custody",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh85034952",
  	"@note": "Custody of children"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/children"
    },
    {
      "@id": "http://homosaurus.org/v2/LGBTQAdoption"
    },
    {
      "@id": "http://homosaurus.org/v2/LGBTQDivorce"
    },
    {
      "@id": "http://homosaurus.org/v2/LGBTQFosterFamilies"
    },
    {
      "@id": "http://homosaurus.org/v2/LGBTQPersonalAndFamilyLaw"
    },
    {
      "@id": "http://homosaurus.org/v2/LGBTQSeparation"
    }
  ]
},
  "Children" : {
  
  "@id": "http://homosaurus.org/v2/children",
  "@type": "skos:Concept",
  "dc:identifier": "children",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "rdfs:comment": "Persons between birth and puberty",
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/children"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:narrower": [
    {
      "@id": "http://homosaurus.org/v2/childrenLGBTQ"
    },
    {
      "@id": "http://homosaurus.org/v2/intersexChildren"
    }
  ],
  "skos:prefLabel": "Children",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh85023418"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/childCustody"
    },
    {
      "@id": "http://homosaurus.org/v2/childrensSexuality"
    },
    {
      "@id": "http://homosaurus.org/v2/desireToHaveChildren"
    },
    {
      "@id": "http://homosaurus.org/v2/familyMembers"
    },
    {
      "@id": "http://homosaurus.org/v2/youth"
    }
  ]
},
  "Children of lesbians" : {
  
  "@id": "http://homosaurus.org/v2/childrenOfLesbians",
  "@type": "skos:Concept",
  "dc:identifier": "childrenOfLesbians",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/childrenOfLGBTQPeople"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/familyMembers"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:narrower": [
    {
      "@id": "http://homosaurus.org/v2/daughtersOfLesbians"
    },
    {
      "@id": "http://homosaurus.org/v2/sonsOfLesbians"
    }
  ],
  "skos:prefLabel": "Children of lesbians",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh85023551",
  	"@note": "Children of gay parents"
  },
  "skos:related": {
    "@id": "http://homosaurus.org/v2/lesbianParents"
  }
},
  "Chromosomes" : {
  
  "@id": "http://homosaurus.org/v2/chromosomes",
  "@type": "skos:Concept",
  "dc:identifier": "chromosomes",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/sexBody"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/sexBody"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Chromosomes",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh85025391"
  }
},
  "Circumcision" : {
  
  "@id": "http://homosaurus.org/v2/circumcision",
  "@type": "skos:Concept",
  "dc:identifier": "circumcision",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "rdfs:comment": "Surgical removal of the foreskin of the penis",
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/circumcision"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Circumcision",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh85026074"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/clitoridectomy"
    },
    {
      "@id": "http://homosaurus.org/v2/cutMen"
    },
    {
      "@id": "http://homosaurus.org/v2/foreskinRestoration"
    },
    {
      "@id": "http://homosaurus.org/v2/uncutMen"
    }
  ]
},
  "Cisgender people" : {
  
  "@id": "http://homosaurus.org/v2/cisgenderPeople",
  "@type": "skos:Concept",
  "dc:identifier": "cisgenderPeople",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/culturallySpecificGenderIdentities"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/gender"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:narrower": [
    {
      "@id": "http://homosaurus.org/v2/cisgenderMen"
    },
    {
      "@id": "http://homosaurus.org/v2/cisgenderWomen"
    }
  ],
  "skos:prefLabel": "Cisgender people",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh2016000684"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/men"
    },
    {
      "@id": "http://homosaurus.org/v2/culturallySpecificGenderIdentities"
    },
    {
      "@id": "http://homosaurus.org/v2/women"
    },
    {
      "@id": "http://homosaurus.org/v2/genderIdentity"
    },
    {
      "@id": "http://homosaurus.org/v2/transgenderPeople"
    }
  ]
},
  "Civil unions" : {
  
  "@id": "http://homosaurus.org/v2/civilUnions",
  "@type": "skos:Concept",
  "dc:identifier": "civilUnions",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:altLabel": [
    "Civil partnership",
    "Registered partnership"
  ],
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/livingArrangements"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/livingArrangements"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:narrower": [
    {
      "@id": "http://homosaurus.org/v2/civilPartnershipDocuments"
    },
    {
      "@id": "http://homosaurus.org/v2/civilUnionCertificates"
    }
  ],
  "skos:prefLabel": "Civil unions",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh2003003097"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/domesticPartnerships"
    },
    {
      "@id": "http://homosaurus.org/v2/marriage"
    },
    {
      "@id": "http://homosaurus.org/v2/marriageLaw"
    },
    {
      "@id": "http://homosaurus.org/v2/legalStatus"
    },
    {
      "@id": "http://homosaurus.org/v2/LGBTQPersonalAndFamilyLaw"
    }
  ]
},
  "Clitoridectomy" : {
  
  "@id": "http://homosaurus.org/v2/clitoridectomy",
  "@type": "skos:Concept",
  "dc:identifier": "clitoridectomy",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:altLabel": [
    "Clitorectomy",
    "Female circumcision"
  ],
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/genderConfirmingSurgery"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/law"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Clitoridectomy",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh85027085"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/circumcision"
    },
    {
      "@id": "http://homosaurus.org/v2/femaleGenitalMutilation"
    }
  ]
},
  "Clitoris" : {
  
  "@id": "http://homosaurus.org/v2/clitoris",
  "@type": "skos:Concept",
  "dc:identifier": "clitoris",
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
      "@id": "http://homosaurus.org/v2/erogenousBodyParts"
    },
    {
      "@id": "http://homosaurus.org/v2/genitals"
    }
  ],
  "skos:hasTopConcept": [
    {
      "@id": "http://homosaurus.org/v2/erogenousBodyParts"
    },
    {
      "@id": "http://homosaurus.org/v2/sexBody"
    }
  ],
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:narrower": {
    "@id": "http://homosaurus.org/v2/g-spot"
  },
  "skos:prefLabel": "Clitoris",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh85027086"
  },
  "skos:related": {
    "@id": "http://homosaurus.org/v2/clitoralSex"
  }
},
  "Clones" : {
  
  "@id": "http://homosaurus.org/v2/clones",
  "@type": "skos:Concept",
  "dc:identifier": "clones",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "rdfs:comment": "Historical term for gay men who tended to dress in a common and masculine fashion, often used in the Castro District of San Francisco",
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/LGBTQHistoricalTerms"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/LGBTQHistoricalTerms"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Clones",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh00007750"
  }
},
  "Clothing" : {
  
  "@id": "http://homosaurus.org/v2/clothing",
  "@type": "skos:Concept",
  "dc:identifier": "clothing",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/clothing"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:narrower": {
    "@id": "http://homosaurus.org/v2/lingerie"
  },
  "skos:prefLabel": "Clothing",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh99005081"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/drag"
    },
    {
      "@id": "http://homosaurus.org/v2/crossdressers"
    },
    {
      "@id": "http://homosaurus.org/v2/crossdressing"
    },
    {
      "@id": "http://homosaurus.org/v2/drab"
    },
    {
      "@id": "http://homosaurus.org/v2/genderExpression"
    }
  ]
},
  "Cocaine" : {
  
  "@id": "http://homosaurus.org/v2/cocaine",
  "@type": "skos:Concept",
  "dc:identifier": "cocaine",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/partyDrugs"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/drugs"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Cocaine",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh85027558"
  },
  "skos:related": {
    "@id": "http://homosaurus.org/v2/cocaineAddiction"
  }
},
  "Collars" : {
  
  "@id": "http://homosaurus.org/v2/collars",
  "@type": "skos:Concept",
  "dc:identifier": "collars",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/sexAccessories"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/sexAccessories"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Collars",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh85027979"
  }
},
  "Common law marriage" : {
  
  "@id": "http://homosaurus.org/v2/commonLawMarriage",
  "@type": "skos:Concept",
  "dc:identifier": "commonLawMarriage",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/marriageLaw"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/law"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Common law marriage",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh85028995"
  }
},
  "Condoms" : {
  
  "@id": "http://homosaurus.org/v2/condoms",
  "@type": "skos:Concept",
  "dc:identifier": "condoms",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:altLabel": [
    "Prophylactics",
    "Rubbers"
  ],
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/sexAccessories"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/sexAccessories"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Condoms",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh85030795"
  },
  "skos:related": {
    "@id": "http://homosaurus.org/v2/saferSex"
  }
},
  "Congenital Adrenal Hyperplasia" : {
 
  "@id": "http://homosaurus.org/v2/congenitalAdrenalHyperplasia",
  "@type": "skos:Concept",
  "dc:identifier": "congenitalAdrenalHyperplasia",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/intersexConditions"
  },
  "skos:hasTopConcept": [
    {
      "@id": "http://homosaurus.org/v2/law"
    },
    {
      "@id": "http://homosaurus.org/v2/sexBody"
    }
  ],
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Congenital Adrenal Hyperplasia",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh85001014",
  	"@note": "Adrenogenital syndrome"
  }
},
"Corsets" : {
  
  "@id": "http://homosaurus.org/v2/corsets",
  "@type": "skos:Concept",
  "dc:identifier": "corsets",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/sexAccessories"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/sexAccessories"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Corsets",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh85033068"
  }
},
"Cottages" : {
  
  "@id": "http://homosaurus.org/v2/cottages",
  "@type": "skos:Concept",
  "dc:identifier": "cottages",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "rdfs:comment": "UK slang term for public bathrooms used as sex locations",
  "skos:altLabel": "Public urinals",
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/sexLocations"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/sexLocations"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:narrower": {
    "@id": "http://homosaurus.org/v2/gloryHoles"
  },
  "skos:prefLabel": "Cottages",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh85033295"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/cottaging"
    },
    {
      "@id": "http://homosaurus.org/v2/tearooms"
    },
    {
      "@id": "http://homosaurus.org/v2/publicBathrooms"
    }
  ]
},
"Criminal law" : {
 
  "@id": "http://homosaurus.org/v2/criminalLaw",
  "@type": "skos:Concept",
  "dc:identifier": "criminalLaw",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
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
  "skos:narrower": [
    {
      "@id": "http://homosaurus.org/v2/criminalisation"
    },
    {
      "@id": "http://homosaurus.org/v2/decriminalisation"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualOffencesLaws"
    }
  ],
  "skos:prefLabel": "Criminal law",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh85034058"
  }
},
"Crossdressing" : {
  
  "@id": "http://homosaurus.org/v2/crossdressing",
  "@type": "skos:Concept",
  "dc:identifier": "crossdressing",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/genderExpression"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/gender"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Crossdressing",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh85137104",
  	"@note": "Cross-dressing"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/clothing"
    },
    {
      "@id": "http://homosaurus.org/v2/readingTransgender"
    },
    {
      "@id": "http://homosaurus.org/v2/crossdressers"
    },
    {
      "@id": "http://homosaurus.org/v2/eonism"
    },
    {
      "@id": "http://homosaurus.org/v2/kabuki"
    },
    {
      "@id": "http://homosaurus.org/v2/transvestism"
    }
  ]
},
"Cunnilingus" : {
  
  "@id": "http://homosaurus.org/v2/cunnilingus",
  "@type": "skos:Concept",
  "dc:identifier": "cunnilingus",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:altLabel": [
    "Carpet munching",
    "Cunt licking",
    "Eating pussy",
    "Muff diving"
  ],
  "skos:broader": [
    {
      "@id": "http://homosaurus.org/v2/clitoralSex"
    },
    {
      "@id": "http://homosaurus.org/v2/vaginalSex"
    },
    {
      "@id": "http://homosaurus.org/v2/oralSex"
    },
    {
      "@id": "http://homosaurus.org/v2/licking"
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
      "@id": "http://homosaurus.org/v2/sexAct"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualPractices"
    }
  ],
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Cunnilingus",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh85095239",
  	"@note": "Oral sex"
  }
},
"Cyberbullying" : {
  
  "@id": "http://homosaurus.org/v2/cyberbullying",
  "@type": "skos:Concept",
  "dc:identifier": "cyberbullying",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/bullying"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/bullying"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Cyberbullying",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh2006004667"
  }
},
"Cybersex" : {
  
  "@id": "http://homosaurus.org/v2/cybersex",
  "@type": "skos:Concept",
  "dc:identifier": "cybersex",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:altLabel": [
    "Internet sex",
    "Online sex"
  ],
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/cybersex"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Cybersex",
  "skos:exactMatch": {
  	"@id": "http://id.loc.gov/authorities/subjects/sh96001657",
  	"@note": "Computer sex"
  },
  "skos:related": {
    "@id": "http://homosaurus.org/v2/sexuality"
  }
},
"Demisexual people" : {
    
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
"Dental dams" : {
    
  "@id": "http://homosaurus.org/v2/dentalDams",
  "@type": "skos:Concept",
  "dc:identifier": "dentalDams",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:altLabel": "Latex barriers",
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/sexAccessories"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/sexAccessories"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Dental dams",
  "skos:exactMatch": {
    "@id": "http://id.loc.gov/authorities/subjects/sh85035617",
    "@note": "Dams (Dentistry)"
  },
  "skos:related": {
    "@id": "http://homosaurus.org/v2/saferSex"
  }
},
"Dildos" : {
    
  "@id": "http://homosaurus.org/v2/dildos",
  "@type": "skos:Concept",
  "dc:identifier": "dildos",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:altLabel": "Strap-ons",
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/sexAccessories"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/sexAccessories"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Dildos",
  "skos:exactMatch": {
    "@id": "http://id.loc.gov/authorities/subjects/sh2007007162"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/vibrators"
    },
    {
      "@id": "http://homosaurus.org/v2/penises"
    },
    {
      "@id": "http://homosaurus.org/v2/strapOnSex"
    }
  ]
},
"Divorced people" : {
    
  "@id": "http://homosaurus.org/v2/divorcedPeople",
  "@type": "skos:Concept",
  "dc:identifier": "divorcedPeople",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/maritalStatus"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/livingArrangements"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Divorced people",
  "skos:exactMatch": {
    "@id": "http://id.loc.gov/authorities/subjects/sh85038648"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/LGBTQDivorce"
    },
    {
      "@id": "http://homosaurus.org/v2/singlePeople"
    }
  ]
},
"Drag balls" : {
    
  "@id": "http://homosaurus.org/v2/dragBalls",
  "@type": "skos:Concept",
  "dc:identifier": "dragBalls",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/LGBTQEvents"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/LGBTQEvents"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Drag balls",
  "skos:exactMatch": {
    "@id": "http://id.loc.gov/authorities/subjects/sh94008099"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/drag"
    },
    {
      "@id": "http://homosaurus.org/v2/ballCulture"
    },
    {
      "@id": "http://homosaurus.org/v2/voguing"
    }
  ]
},
"Drag kings" : {
    
  "@id": "http://homosaurus.org/v2/dragKings",
  "@type": "skos:Concept",
  "dc:identifier": "dragKings",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/dragKings"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:narrower": [
    {
      "@id": "http://homosaurus.org/v2/dragFathers"
    },
    {
      "@id": "http://homosaurus.org/v2/dragMothers"
    }
  ],
  "skos:prefLabel": "Drag kings",
  "skos:exactMatch": {
    "@id": "http://id.loc.gov/authorities/subjects/sh85064636",
    "@note": "Male impersonators"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/drag"
    },
    {
      "@id": "http://homosaurus.org/v2/crossdressers"
    },
    {
      "@id": "http://homosaurus.org/v2/dragCommunity"
    },
    {
      "@id": "http://homosaurus.org/v2/dragFamilies"
    },
    {
      "@id": "http://homosaurus.org/v2/dragFathers"
    },
    {
      "@id": "http://homosaurus.org/v2/dragMothers"
    },
    {
      "@id": "http://homosaurus.org/v2/dragQueens"
    },
    {
      "@id": "http://homosaurus.org/v2/maleImpersonators"
    }
  ]
},
"Drag queens" : {
    
  "@id": "http://homosaurus.org/v2/dragQueens",
  "@type": "skos:Concept",
  "dc:identifier": "dragQueens",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/queens"
  },
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
      "@id": "http://homosaurus.org/v2/dragFathers"
    },
    {
      "@id": "http://homosaurus.org/v2/dragMothers"
    }
  ],
  "skos:prefLabel": "Drag queens",
  "skos:exactMatch": {
    "@id": "http://id.loc.gov/authorities/subjects/sh85064634",
    "@note": "Female impersonators"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/drag"
    },
    {
      "@id": "http://homosaurus.org/v2/crossdressers"
    },
    {
      "@id": "http://homosaurus.org/v2/dragCommunity"
    },
    {
      "@id": "http://homosaurus.org/v2/dragFamilies"
    },
    {
      "@id": "http://homosaurus.org/v2/dragFathers"
    },
    {
      "@id": "http://homosaurus.org/v2/dragKings"
    },
    {
      "@id": "http://homosaurus.org/v2/dragMothers"
    },
    {
      "@id": "http://homosaurus.org/v2/femaleImpersonators"
    }
  ]
},
"Drug abuse" : {
    
  "@id": "http://homosaurus.org/v2/drugAbuse",
  "@type": "skos:Concept",
  "dc:identifier": "drugAbuse",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:altLabel": [
    "Drug addiction",
    "Drug dependence"
  ],
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/substanceAbuse"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/substanceAbuse"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:narrower": [
    {
      "@id": "http://homosaurus.org/v2/cocaineAddiction"
    },
    {
      "@id": "http://homosaurus.org/v2/crystalMethAddiction"
    }
  ],
  "skos:prefLabel": "Drug abuse",
  "skos:exactMatch": {
    "@id": "http://id.loc.gov/authorities/subjects/sh85039675"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/drugUsers"
    },
    {
      "@id": "http://homosaurus.org/v2/drugs"
    },
    {
      "@id": "http://homosaurus.org/v2/recreationalDrugUse"
    },
    {
      "@id": "http://homosaurus.org/v2/narcoticsAnonymous"
    }
  ]
},
"Drugs" : {
    
  "@id": "http://homosaurus.org/v2/drugs",
  "@type": "skos:Concept",
  "dc:identifier": "drugs",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "rdfs:comment": "For recreational party drugs commonly found in LGBTQculture",
  "skos:altLabel": "Street drugs",
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/drugs"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:narrower": {
    "@id": "http://homosaurus.org/v2/partyDrugs"
  },
  "skos:prefLabel": "Drugs",
  "skos:exactMatch": {
    "@id": "http://id.loc.gov/authorities/subjects/sh85039719"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/drugAbuse"
    },
    {
      "@id": "http://homosaurus.org/v2/medication"
    },
    {
      "@id": "http://homosaurus.org/v2/recreationalDrugUse"
    }
  ]
},
"Ecofeminism" : {
  
  "@id": "http://homosaurus.org/v2/ecofeminism",
  "@type": "skos:Concept",
  "dc:identifier": "ecofeminism",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "rdfs:comment": "Links feminism with ecology",
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/feminism"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/feminism"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Ecofeminism",
  "skos:exactMatch": {
    "@id": "http://id.loc.gov/authorities/subjects/sh91001601"
  }
},
"Electroshock therapy" : {
  
  "@id": "http://homosaurus.org/v2/electroshockTherapy",
  "@type": "skos:Concept",
  "dc:identifier": "electroshockTherapy",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:altLabel": [
    "Electric shock therapy",
    "Electroconvulsive therapy"
  ],
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/therapies"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/law"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Electroshock therapy",
  "skos:exactMatch": {
    "@id": "http://id.loc.gov/authorities/subjects/sh85041999",
    "@note" : "Electroconvulsive therapy"
  }
},
"Enemas" : {
  
  "@id": "http://homosaurus.org/v2/enemas",
  "@type": "skos:Concept",
  "dc:identifier": "enemas",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:altLabel": "Colonic irrigation",
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/enemas"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Enemas",
  "skos:exactMatch": {
    "@id": "http://id.loc.gov/authorities/subjects/sh85043118",
    "@note" : "Enema"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/analSex"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualPractices"
    }
  ]
},
"Eonism" : {
  
  "@id": "http://homosaurus.org/v2/eonism",
  "@type": "skos:Concept",
  "dc:identifier": "eonism",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "rdfs:comment": "Historical terms for the adoption of feminine behaviors in a person assigned male at birth.",
  "skos:broader": [
    {
      "@id": "http://homosaurus.org/v2/medicalisation"
    },
    {
      "@id": "http://homosaurus.org/v2/genderExpression"
    }
  ],
  "skos:hasTopConcept": [
    {
      "@id": "http://homosaurus.org/v2/law"
    },
    {
      "@id": "http://homosaurus.org/v2/gender"
    }
  ],
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Eonism",
  "skos:exactMatch": {
    "@id": "http://id.loc.gov/authorities/subjects/sh85137104",
    "@note" : "Cross-dressing"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/crossdressing"
    },
    {
      "@id": "http://homosaurus.org/v2/eonistPeople"
    },
    {
      "@id": "http://homosaurus.org/v2/transvestism"
    }
  ]
},
"Erectile dysfunction" : {
  
  "@id": "http://homosaurus.org/v2/erectileDysfunction",
  "@type": "skos:Concept",
  "dc:identifier": "erectileDysfunction",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:altLabel": "Impotence",
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/sexualDysfunction"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/sexualDysfunction"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Erectile dysfunction",
  "skos:exactMatch": {
    "@id": "http://id.loc.gov/authorities/subjects/sh85064658",
    "@note" : "Impotence"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/erectionPills"
    },
    {
      "@id": "http://homosaurus.org/v2/erections"
    }
  ]
},
"Erotica" : {
  
  "@id": "http://homosaurus.org/v2/erotica",
  "@type": "skos:Concept",
  "dc:identifier": "erotica",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "rdfs:comment": "The portrayal of sexuality with high-art aspirations, focusing also on feelings and emotions",
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/erotica"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:narrower": {
    "@id": "http://homosaurus.org/v2/eroticLiteratureLGBTQ"
  },
  "skos:prefLabel": "Erotica",
  "skos:exactMatch": {
    "@id": "http://id.loc.gov/authorities/subjects/sh85044718"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/pornography"
    },
    {
      "@id": "http://homosaurus.org/v2/LGBTQArts"
    }
  ]
},
"Eroticism" : {
 
  "@id": "http://homosaurus.org/v2/eroticism",
  "@type": "skos:Concept",
  "dc:identifier": "eroticism",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/eroticism"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Eroticism",
  "skos:exactMatch": {
    "@id": "http://id.loc.gov/authorities/subjects/sh85120733",
    "@note": "Sexual excitement"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/physicalAffection"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualExcitement"
    },
    {
      "@id": "http://homosaurus.org/v2/sexuality"
    }
  ]
},
"Escort services" : {
  
  "@id": "http://homosaurus.org/v2/escortServices",
  "@type": "skos:Concept",
  "dc:identifier": "escortServices",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/sexWork"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/sexWork"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Escort services",
  "skos:exactMatch": {
    "@id": "http://id.loc.gov/authorities/subjects/sh85044807"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/escorts"
    },
    {
      "@id": "http://homosaurus.org/v2/prostitution"
    }
  ]
},
"Estrogen" : {
  
  "@id": "http://homosaurus.org/v2/estrogen",
  "@type": "skos:Concept",
  "dc:identifier": "estrogen",
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
      "@id": "http://homosaurus.org/v2/hormoneTherapyGender"
    },
    {
      "@id": "http://homosaurus.org/v2/hormones"
    }
  ],
  "skos:hasTopConcept": [
    {
      "@id": "http://homosaurus.org/v2/law"
    },
    {
      "@id": "http://homosaurus.org/v2/sexBody"
    }
  ],
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Estrogen",
  "skos:exactMatch": {
    "@id": "http://id.loc.gov/authorities/subjects/sh85045012"
  }
},
"Etiology" : {
  
  "@id": "http://homosaurus.org/v2/etiology",
  "@type": "skos:Concept",
  "dc:identifier": "etiology",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "rdfs:comment": "Inquiries and speculations regarding the causes of sexual behaviour or diseases",
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/theories"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/theories"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Etiology",
  "skos:exactMatch": {
    "@id": "http://id.loc.gov/authorities/subjects/sh00005666"
  }
},
"Eunuchs" : {
  
  "@id": "http://homosaurus.org/v2/eunuchs",
  "@type": "skos:Concept",
  "dc:identifier": "eunuchs",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:altLabel": "Castrati",
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/culturallySpecificGenderIdentities"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/gender"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Eunuchs",
  "skos:exactMatch": {
    "@id": "http://id.loc.gov/authorities/subjects/sh85045580"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/castration"
    },
    {
      "@id": "http://homosaurus.org/v2/hijra"
    }
  ]
},
"Ex-gay movement" : {
  
  "@id": "http://homosaurus.org/v2/ex-gayMovement",
  "@type": "skos:Concept",
  "dc:identifier": "ex-gayMovement",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "rdfs:comment": "People and organisations that seek to get people to refrain from entering or pursuing same-sex relationships, to eliminate homosexual desires, to develop heterosexual desires, or to enter into a heterosexual relationship",
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/socialMovements"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/socialMovements"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Ex-gay movement",
  "skos:exactMatch": {
    "@id": "http://id.loc.gov/authorities/subjects/sh2005005425"
  },
  "skos:related": {
    "@id": "http://homosaurus.org/v2/sexualReorientation"
  }
},
"Exhibitionism" : {
  
  "@id": "http://homosaurus.org/v2/exhibitionism",
  "@type": "skos:Concept",
  "dc:identifier": "exhibitionism",
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
  "skos:prefLabel": "Exhibitionism",
  "skos:exactMatch": {
    "@id": "http://id.loc.gov/authorities/subjects/sh85046353"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/publicSex"
    },
    {
      "@id": "http://homosaurus.org/v2/sexualAddiction"
    }
  ]
},
//[STOPPED AT LETTER F]
"Fetishism" : {
  
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
"Gay movement" : {
  
  "@id": "http://homosaurus.org/v2/gayMovement",
  "@type": "skos:Concept",
  "dc:identifier": "gayMovement",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:altLabel": [
    "Gay organisations",
    "Gay organizations"
  ],
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/movementLGBTQ"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/socialMovements"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:narrower": [
    {
      "@id": "http://homosaurus.org/v2/gayPoliticalGroups"
    },
    {
      "@id": "http://homosaurus.org/v2/gayReligiousGroups"
    },
    {
      "@id": "http://homosaurus.org/v2/gayTradeUnionGroups"
    }
  ],
  "skos:prefLabel": "Gay movement",
  "skos:exactMatch": {
    "@id": "http://id.loc.gov/authorities/subjects/sh85053580",
    "@note": "Gay liberation movement"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/gayCommunityCentres"
    },
    {
      "@id": "http://homosaurus.org/v2/gayInformationCentres"
    },
    {
      "@id": "http://homosaurus.org/v2/gayLiberation"
    },
    {
      "@id": "http://homosaurus.org/v2/gayPress"
    },
    {
      "@id": "http://homosaurus.org/v2/gayRadio"
    },
    {
      "@id": "http://homosaurus.org/v2/gayTelevision"
    }
  ]
},
"Gay Muslims" : {
    
  "@id": "http://homosaurus.org/v2/gayMuslims",
  "@type": "skos:Concept",
  "dc:identifier": "gayMuslims",
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
      "@id": "http://homosaurus.org/v2/muslimsLGBTQ"
    },
    {
      "@id": "http://homosaurus.org/v2/LGBTQAsianReligions"
    }
  ],
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/LGBTQReligions"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Gay Muslims",
  "skos:exactMatch": {
    "@id": "http://id.loc.gov/authorities/subjects/sh2009010809",
    "@note": "Muslim gays"
  }
},
"Gay newspapers" : {
    
  "@id": "http://homosaurus.org/v2/gayNewspapers",
  "@type": "skos:Concept",
  "dc:identifier": "gayNewspapers",
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
      "@id": "http://homosaurus.org/v2/newspapersLGBTQ"
    },
    {
      "@id": "http://homosaurus.org/v2/gayPress"
    }
  ],
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/pressLGBTQ"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Gay newspapers",
  "skos:exactMatch": {
    "@id": "http://id.loc.gov/authorities/subjects/sh94008545"
  },
  "skos:related": {
    "@id": "http://homosaurus.org/v2/gayNewsletters"
  }
},
"Gay parents" : {
    
  "@id": "http://homosaurus.org/v2/gayParents",
  "@type": "skos:Concept",
  "dc:identifier": "gayParents",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:altLabel": "Gay fathers",
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/parentsLGBTQ"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/familyMembers"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Gay parents",
  "skos:exactMatch": {
    "@id": "http://id.loc.gov/authorities/subjects/sh85061779"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/childrenOfGayMen"
    },
    {
      "@id": "http://homosaurus.org/v2/fathers"
    },
    {
      "@id": "http://homosaurus.org/v2/gayFamilies"
    }
  ]
},
"Gay porn films" : {
    
  "@id": "http://homosaurus.org/v2/gayPornFilms",
  "@type": "skos:Concept",
  "dc:identifier": "gayPornFilms",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/pornFilmsLGBTQ"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/pornFilmsLGBTQ"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Gay porn films",
  "skos:exactMatch": {
    "@id": "http://id.loc.gov/authorities/subjects/sh2011001047",
    "@note": "Gay pornographic films"
  }
},
"Gay press" : {
    
  "@id": "http://homosaurus.org/v2/gayPress",
  "@type": "skos:Concept",
  "dc:identifier": "gayPress",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/pressLGBTQ"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/pressLGBTQ"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:narrower": [
    {
      "@id": "http://homosaurus.org/v2/gayNewsletters"
    },
    {
      "@id": "http://homosaurus.org/v2/gayNewspapers"
    }
  ],
  "skos:prefLabel": "Gay press",
  "skos:exactMatch": {
    "@id": "http://id.loc.gov/authorities/subjects/sh94008923"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/gayMovement"
    },
    {
      "@id": "http://homosaurus.org/v2/LGBTQMagazines"
    }
  ]
},
"Gay Protestants" : {
    
  "@id": "http://homosaurus.org/v2/gayProtestants",
  "@type": "skos:Concept",
  "dc:identifier": "gayProtestants",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/protestantsLGBTQ"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/LGBTQReligions"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Gay Protestants",
  "skos:exactMatch": {
    "@id": "http://id.loc.gov/authorities/subjects/sh2007008279",
    "@note": "Protestant gays"
  }
},
"Gay rights" : {
    
  "@id": "http://homosaurus.org/v2/gayRights",
  "@type": "skos:Concept",
  "dc:identifier": "gayRights",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/civilRightsLGBTQ"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/humanRights"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:prefLabel": "Gay rights",
  "skos:exactMatch": {
    "@id": "http://id.loc.gov/authorities/subjects/sh94009215"
  }
},
"Gay saunas" : {
    
  "@id": "http://homosaurus.org/v2/gaySaunas",
  "@type": "skos:Concept",
  "dc:identifier": "gaySaunas",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:altLabel": [
    "Gay bathhouses",
    "Gay baths"
  ],
  "skos:broader": [
    {
      "@id": "http://homosaurus.org/v2/LGBTQNightLife"
    },
    {
      "@id": "http://homosaurus.org/v2/sexLocations"
    }
  ],
  "skos:hasTopConcept": [
    {
      "@id": "http://homosaurus.org/v2/LGBTQNightLife"
    },
    {
      "@id": "http://homosaurus.org/v2/sexLocations"
    }
  ],
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:narrower": {
    "@id": "http://homosaurus.org/v2/gloryHoles"
  },
  "skos:prefLabel": "Gay saunas",
  "skos:exactMatch": {
    "@id": "http://id.loc.gov/authorities/subjects/sh2005020503",
    "@note": "Gay bathhouses"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/publicSex"
    },
    {
      "@id": "http://homosaurus.org/v2/sexIndustry"
    }
  ]
},
"Gay youth" : {
    
  "@id": "http://homosaurus.org/v2/gayYouth",
  "@type": "skos:Concept",
  "dc:identifier": "gayYouth",
  "dc:issued": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "dc:modified": {
    "@value": "2019-05-14",
    "@type": "xsd:date"
  },
  "skos:altLabel": "Gay teenagers",
  "skos:broader": {
    "@id": "http://homosaurus.org/v2/youthLGBTQ"
  },
  "skos:hasTopConcept": {
    "@id": "http://homosaurus.org/v2/youth"
  },
  "skos:inScheme": {
    "@id": "http://homosaurus.org/terms"
  },
  "skos:narrower": {
    "@id": "http://homosaurus.org/v2/gayBoys"
  },
  "skos:prefLabel": "Gay youth",
  "skos:exactMatch": {
    "@id": "http://id.loc.gov/authorities/subjects/sh88007920"
  },
  "skos:related": [
    {
      "@id": "http://homosaurus.org/v2/gayCharacters"
    },
    {
      "@id": "http://homosaurus.org/v2/gayIdentity"
    },
    {
      "@id": "http://homosaurus.org/v2/gayMen"
    },
    {
      "@id": "http://homosaurus.org/v2/gayYouthLiterature"
    }
  ]
},
//[STOPPED AT GENDER]
"Gender identity" : {
  
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
"Heteronormativity" : {
  
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
"Lesbianism" : {
  
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

function makeList() {
	for (x in homosaurus) {
		if (x != "@context") {
			document.getElementById("termList").innerHTML += "<li onclick='collect()'>" + x + "</li>"
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
        		document.getElementById("preferred").innerHTML = "<a href=\"https://iucat.iu.edu/?search_field=all_field&q=" + homosaurus[n]["skos:prefLabel"].replace(/ /g,'+') + '\">' + homosaurus[n]["skos:prefLabel"] + "</a>"
        	}
        	else{
		        var newN = homosaurus[n]["skos:prefLabel"].replace(/ /g,'+')
		        var searchTerm = homosaurus[n]["skos:prefLabel"]
		        document.getElementById("preferred").innerHTML = "<a href=\"https://iucat.iu.edu/?search_field=subject&q=" + newN + '\">' + homosaurus[n]["skos:prefLabel"] + "</a>"
		    }
        //document.getElementById("preferred").innerHTML = "<a href=\"https://iucat.iu.edu/?utf8=&#10004;&search_field=subject&q=" + newN + '\">' + homosaurus[n]["skos:prefLabel"] + "</a>"
        document.getElementById("lcsh").innerHTML = "<a href=\"https://iucat.iu.edu/?search_field=subject&q=" + newN + '\">' + searchTerm + "</a>"
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
          p.innerHTML = "<a href=\"https://iucat.iu.edu/?search_field=all_field&q=" + x + '\">' + x + "</a>"
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