var scores = {
    "Angol": 0,
    "Biokém": 0,
    "Filozófia": 0,
    "Földrajz": 0,
    "Gazdtud": 0,
    "Germanisztika": 0,
    "Informatika": 0,
    "Klasszika": 0,
    "Magyar": 0,
    "Matfiz": 0,
    "Orientalisztika": 0,
    "Romanisztika": 0,
    "Skandinavisztika": 0,
    "Szlavisztika": 0,
    "Társtud": 0,
    "Történész": 0
}

var questions = [

    {
        question: "Introvertáltnak tartod magad?",
        answers: {
            "Igen": ["Biokém", "Filozófia", "Informatika", "Magyar", "Orientalisztika", "Történész"],
            "Nem": ["Angol", "Földrajz", "Gazdtud", "Klasszika", "Romanisztika", "Társtud"],
            "Nem tudom": ["Germanisztika", "Matfiz", "Skandinavisztika", "Szlavisztika"]
        }
    },
    {
        question: "Milyen felsőt hordasz általában?",
        answers: {
            "Ing/blúz": ["Gazdtud", "Klasszika", "Germanisztika", "Földrajz"],
            "Mintás rövidujjú": ["Angol", "Biokém", "Matfiz", "Orientalisztika", "Romanisztika"],
            "Garbós hosszúujjú": ["Történész", "Magyar", "Filozófia", "Szlavisztika"],
            "Pulcsi": ["Informatika", "Társtud", "Skandinavisztika"]
        }
    },
    {
        question: "Mit szoktál reggelizni?",
        answers: {
            "Müzlit": ["Angol", "Filozófia", "Gazdtud", "Szlavisztika", "Társtud"],
            "Kakaós csigát": ["Biokém", "Informatika", "Germanisztika", "Skandinavisztika"],
            "Teát/kávét": ["Romanisztika", "Magyar", "Földrajz", "Történész"],
            "Semmit": ["Orientalisztika", "Matfiz", "Klasszika"]
        }
    }

    , {
        question: "Milyen buliba mennél el szívesen?",
        answers: {
            "Karaoke": ["Germanisztika", "Klasszika", "Matfiz", "Orientalisztika", "Történész"],
            "JustDance": ["Informatika", "Romanisztika", "Biokém", "Földrajz"],
            "Halloweeni": ["Angol", "Társtud", "Magyar"],
            "Házibuli": ["Gazdtud", "Skandinavisztika", "Szlavisztika", "Filozófia"]
        }
    }

    , {
        question: "Mikor szoktál tanulni?",
        answers: {
            "Délelőtt": ["Biokém", "Filozófia", "Klasszika", "Skandinavisztika"],
            "Délután": ["Földrajz", "Magyar", "Szlavisztika", "Angol", "Orientalisztika"],
            "Éjjel": ["Matfiz", "Informatika", "Germanisztika", "Történész"],
            "Amikor eszembe jut": ["Romanisztika", "Gazdtud", "Társtud"]
        }
    }
    , {
        question: "Hol nyaralnál a legszívesebben?",
        answers: {
            "Svájc": ["Gazdtud", "Klasszika", "Skandinavisztika", "Történész"],
            "Japán": ["Informatika", "Orientalisztika", "Romanisztika", "Biokém"],
            "Hawaii": ["Földrajz", "Filozófia", "Társtud", "Angol"],
            "Balaton": ["Szlavisztika", "Magyar", "Germanisztika", "Matfiz"]
        }
    }

    , {
        question: "Hogy jellemeznének a barátaid?",
        answers: {
            "Figyelmes": ["Magyar", "Orientalisztika", "Szlavisztika", "Társtud"],
            "Bátor": ["Romanisztika", "Biokém", "Földrajz", "Filozófia"],
            "Vicces": ["Germanisztika", "Angol", "Gazdtud", "Skandinavisztika"],
            "Szorgalmas": ["Matfiz", "Informatika", "Történész", "Klasszika"]
        }
    }

    , {
        question: "Milyen ételeket szeretsz a legjobban?",
        answers: {
            "Sós": ["Angol", "Informatika", "Magyar", "Skandinavisztika"],
            "Édes": ["Gazdtud", "Romanisztika", "Biokém", "Földrajz"],
            "Savanyú": ["Filozófia", "Szlavisztika", "Matfiz", "Történész"],
            "Csípős": ["Orientalisztika", "Germanisztika", "Társtud", "Klasszika"]
        }
    }

    , {
        question: "Milyen állat lennél?",
        answers: {
            "Szurikáta": ["Informatika", "Matfiz", "Romanisztika", "Társtud"],
            "Gepárd": ["Biokém", "Földrajz", "Szlavisztika", "Skandinavisztika"],
            "Teve": ["Gazdtud", "Angol", "Filozófia", "Történész"],
            "Panda": ["Orientalisztika", "Germanisztika", "Klasszika", "Magyar"]
        }
    }
    , {
        question: "Kivel mennél legszívesebben nyaralni?",
        answers: {
            "Családdal": ["Biokém", "Klasszika", "Matfiz", "Skandinavisztika"],
            "Barátokkal": ["Társtud", "Germanisztika", "Magyar", "Történész"],
            "Párommal": ["Romanisztika", "Angol", "Földrajz", "Gazdtud"],
            "Egyedül": ["Informatika", "Orientalisztika", "Szlavisztika", "Filozófia"]
        }
    },
    {
        question: "Mit szeretsz a legjobban magadon?",
        answers: {
            "Szemem": ["Biokém", "Klasszika", "Magyar", "Orientalisztika"],
            "Mosolyom": ["Romanisztika", "Matfiz", "Skandinavisztika", "Angol"],
            "Hajam": ["Germanisztika", "Földrajz", "Szlavisztika", "Történész"],
            "Személyiségem": ["Informatika", "Társtud", "Gazdtud", "Filozófia"]
        }
    },
    {
        question: "Melyik a kedvenc social media felületed?",
        answers: {
            "Instagram": ["Angol", "Filozófia", "Orientalisztika", "Skandinavisztika"],
            "BeReal": ["Földrajz", "Romanisztika", "Germanisztika", "Informatika"],
            "Messenger": ["Biokém", "Magyar", "Szlavisztika", "Történész"],
            "Tiktok": ["Gazdtud", "Társtud", "Klasszika", "Matfiz"]
        }
    }
]

