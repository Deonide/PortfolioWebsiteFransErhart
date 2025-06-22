'use client';
import { useState, useEffect } from "react";
import Navbar from "@/Components/NavBar"; 
import ProjectCard from "@/Components/projectCard";
import Image from "next/image";
export default function Projects() {
  const [backgroundAttachment, setBackgroundAttachment] = useState("fixed");
  const [isAnyModalOpen, setIsAnyModalOpen] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setBackgroundAttachment("scroll");
    }
  }, []);

  // Handle modal state changes from the ProjectCard component
  const handleModalStateChange = (isOpen: boolean) => {
    setIsAnyModalOpen(isOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div 
        className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ease-in-out ${
          isAnyModalOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <Navbar />
      </div>

      <main className="relative z-0 flex flex-col items-center flex-grow p-2 pt-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        {/*} Example ProjectCard usage
          coverImage="" voor als je een andere image wilt dan de eerste image in je project page (Optional)
          description, downloadlink(string + downloadlinkobject), featurs, codeSnippet, liveLink, githubLink = (Optional)
          <ProjectCard
            projectId="ExampleProject"
            title="Game Naam"
            techStack={["C#", "Unity"]}
            media={[]}
            coverImage=""
            description="Dit is een voorbeeld project. Je kan hier de beschrijving van je project plaatsen."
            features={[
                {
                  title: "Feature 1", 
                  description: "Beschrijving van feature 1", 
                  codeSnippet: {code: "Console.WriteLine(\"Hello World\");", language: "csharp", title: "Hier kan je een code snippet plaatsen"},
                },
                {title: "Feature 2", description: "Beschrijving van feature 2"},
            ]}
            codeSnippet={{ code: `Console.WriteLine('Hello World');`, language: "csharp", title: "Hier kan je een code snippet plaatsen" }}
            liveLink=""
            githubLink=""
            onModalStateChange={handleModalStateChange}
        />
          */}
          
          <ProjectCard 
            projectId="RogueLikeCardGame"
            media={[
              { type: 'image', src: "/img/RogueLikeCardGame/InGame.png", alt: "In Game Screen" },
              { type: 'image', src: "/img/RogueLikeCardGame/WinScreen.png", alt: "Win screen" },
              { type: 'image', src: "/img/RogueLikeCardGame/CardSelection.png", alt: "Card selection" },
              { type: 'image', src: "/img/RogueLikeCardGame/Shop.png", alt: "Shop" },
            ]}
            title="Roguelike Card Game" 
            techStack={["C#", "Unity"]} 
            description="An endless amount of fun full of slaying enemies and upgrading your deck."
            features={[
              {
                title: "Draw Cards",
                description: "After each round of enemies you get a card selection which you can choose from",
                codeSnippet:{
                  language: "csharp", 
                  title:"Card draw Code Snippet", 
                  code: `    public void UpdateHandVisuals() 
    { 
        int cardCount = m_cardsInHand.Count;

        if(cardCount == 1)
        {
            m_cardsInHand[0].transform.localRotation = Quaternion.Euler(0f, 0f, 0f);
            m_cardsInHand[0].transform.localPosition = new Vector3(0f, 0f, 0f);
            return;
        }

        //To give the cards a proper position and rotation for a good looking hand.
        for(int i = 0; i < cardCount; i++)
        {
            // Calculating the rotation of every card in hand for proper visuals.
            float rotationAngle = (m_fanSpread * (i - (cardCount - 1) / 2f));
            m_cardsInHand[i].transform.localRotation = Quaternion.Euler(0f, 0f, rotationAngle);

            float horizontalOffset = (m_horizontralCardSpacing * (i - (cardCount - 1) / 2f));
            //Nomalizes cardpositions between -1 and 1.
            float normalizedPosition = (2f * i / (cardCount - 1) - 1f);
            float verticalOffset =   m_verticalCardSpacing * (1 - normalizedPosition * normalizedPosition);

            //Set card positions
            m_cardsInHand[i].transform.localPosition = new Vector3(horizontalOffset, verticalOffset, 0f);
        }
    }`}
              },
                            {
                title: "Arc Renderer for playing a card",
                description: "When you play a card, an arc renderer is used to show which enemy you will be targeting",
                  codeSnippet:{
                  language: "csharp", 
                  title:"Arc Renderer Code Snippet", 
                  code:`    private void UpdateArc(Vector3 start, Vector3 mid, Vector3 end)
    {
        int numDots = Mathf.CeilToInt(Vector3.Distance(start, end) / (m_spacing * m_spacingScale));

        for (int i = 0; i < numDots && i < m_dotPool.Count; i++)
        {
            float t = i / (float)numDots;
            t = Mathf.Clamp(t, 0f, 1f);

            Vector3 position = QuadraticBezierPoint(start, mid, end, t);

            if(i != numDots - m_dotsToSkip)
            {
                m_dotPool[i].transform.position = position;
                m_dotPool[i].SetActive(true);
            }

            if(i == numDots - (m_dotsToSkip + 1) && i - m_dotsToSkip + 1 >= 0)
            {
                m_arrowDirection = m_dotPool[i].transform.position;
            }
        }

        //Deactivate Unused dots
        for(int i = numDots - m_dotsToSkip; i < m_dotPool.Count; i++) 
        { 
            if(i > 0)
            {
                m_dotPool[i].SetActive(false);
            }
        }
    }

    private void PositionAndRotateArrow(Vector3 position)
    {
        m_arrowInstance.transform.position = position;
        Vector3 direction = m_arrowDirection - position;
        //Mathf.Atan2 converts an x and y position into radiants? (Returns a value of negative 3,14... and 3.14... (3.14... = pie).
        //Then when multiplied (with Mathf.Rad2Deg) converts from radiants to degrees.
        float angle = Mathf.Atan2(direction.y, direction.x) * Mathf.Rad2Deg;
        //Doing some adjustments to the rotation of the arrow instance.
        angle += m_arrowAngleAdjustment;
        //Quaternion.AngleAxis takes 2 inputs first is the angle and the other is the axis that we want to change(any axis that has a one is the axis we will change).
        m_arrowInstance.transform.rotation = Quaternion.AngleAxis(angle, Vector3.forward);
    }

    private Vector3 CalculateMidPoint(Vector3 start, Vector3 end)
    {
        Vector3 midpoint = (start + end) / 2;
        float arcHeight = Vector3.Distance(start, end) / 3f;
        midpoint.y += arcHeight;
        return midpoint;
    }`
              }
              },
              {
                title: "Shop",
                description: "Buy cards and other upgrades to venture further into the dungeon",
                codeSnippet: { 
                  language: "csharp", 
                  title: "Shop Code Snippet" ,
                  code: `    public void CheckMoney()
    {
        m_player = FindFirstObjectByType<Player>();
        m_cardDisplay = GetComponentInChildren<CardDisplay>();

        if(m_player.m_money >= m_cardDisplay.m_cardData.m_shopValue)
        {
            m_player.m_money -= m_cardDisplay.m_cardData.m_shopValue;
            PickUp();
            GameManager.Instance.m_uIManager.UpdateText();
        }
    }

    public void PickUp()
    {
        m_card = GetComponentInChildren<CardDisplay>().m_cardData;
        m_pileManager.m_currentDeck.Add(m_card);
    }`, 
                }
              },
              {
                title: "Slay Enemies and gain a reward of gold and cards",
                description: "After each round of enemies you get a loot selection which you can choose from",
                codeSnippet: {
                  language: "csharp", 
                  title:"Loot reward Code Snippet", 
                  code:`public void RarityCheck()
{
    for (int i = 0; i < m_cardsToDrop; i++)
    {
        m_rarityDrop = Random.Range(0, 201);
        m_spawnedCard = Instantiate(m_cardPrefab, m_spawnPos[i].transform.position, Quaternion.identity, m_spawnPos[i].transform);
        if (m_rarityDrop <= 100)
        {
            int cardToDrop = Random.Range(0, m_commonCards.Count);
            UpdateCardData(m_spawnedCard, m_commonCards.ElementAt(cardToDrop));
        }
        else if (m_rarityDrop > 100 && m_rarityDrop <= 190)
        {
            int cardToDrop = Random.Range(0, m_rareCards.Count);
            UpdateCardData(m_spawnedCard, m_rareCards.ElementAt(cardToDrop));
        }
        else if (m_rarityDrop > 190 && m_rarityDrop <= 199)
        {

            int cardToDrop = Random.Range(0, m_epicCards.Count);
            UpdateCardData(m_spawnedCard, m_epicCards.ElementAt(cardToDrop));
        }
        else
        {
            int cardToDrop = Random.Range(0, m_legendaryCards.Count);
            UpdateCardData(m_spawnedCard, m_legendaryCards.ElementAt(cardToDrop));
        }
    }

    foreach(GameObject button in m_button)
    {
        button.SetActive(true);
    }
}

public void MoneyDrop()
{
    m_GoldToDrop = Mathf.RoundToInt(15 * GameManager.Instance.m_waveManager.m_amountOfEnemies);
    GameManager.Instance.m_player.m_money += m_GoldToDrop;
    GameManager.Instance.m_uIManager.UpdateText();
}

private void UpdateCardData(GameObject game, Card cardData)
{
    //Set the CardData of the instantiated card
    game.GetComponent<CardDisplay>().m_cardData = cardData;
    game.GetComponent<CardDisplay>().UpdateCardDisplay();
}`
                }
              },

              ]}
            liveLink="https://deonide.itch.io/roguelike"
            githubLink="https://github.com/Deonide/RogueLike"
            onModalStateChange={handleModalStateChange}
          />
          <ProjectCard
            projectId="Shaders"
            title="Shader practice"
            techStack={["Unity"]}
            media={[              
              { type: 'image', src: "/img/Shaders/ShaderVisuals.png", alt: "Shader Visuals" },
              { type: 'image', src: "/img/Shaders/Color.png", alt: "Shader Graph" },
              { type: 'image', src: "/img/Shaders/Dither.png", alt: "Shader Graph 2" },
              { type: 'image', src: "/img/Shaders/Base.png", alt: "Shader Graph 3" },
            ]}
            coverImage=""
            description="Some Shaders"
            features={[
                {
                  title: "Learning to work with shadergraphs", 
                  description: "While working on this project i learned a little bit about working with shadergraphs in Unity. I made a couple of different shaders to learn how to use them.",

                },

            ]}

            liveLink=""
            githubLink=""
            onModalStateChange={handleModalStateChange}
        />
          <ProjectCard 
            projectId="TridentPop"
            media={[
              { type: 'image', src: "/img/TridentPop/Icon.png", alt: "Project thumbnail" },
              { type: 'image', src: "/img/TridentPop/MainMenu.png", alt: "Main Menu" },
              { type: 'image', src: "/img/TridentPop/BossBubble.png", alt: "Boss Bubble" },
              { type: 'image', src: "/img/TridentPop/InGame.png", alt: "In Game" },
            ]}
            title="Trident Pop" 
            techStack={["C#", "Unity", "Blender"]} 
            description="Global Game Jam 2025 Game with the theme bubbles"
            features={[
              {
                title: "Random bubble spawns which change each game",
                description: "At the start of the game the bubble spawners will be spawn at a random location on the screen, this will change each game so you will not have the same spawns every time you play. when enough bubble spawns are created the game will start.",
                codeSnippet: {
                  language: "csharp", 
                  title:"Bubble spawner Code Snippet", 
                  code:`    void Start()
    {
        Cursor.lockState = CursorLockMode.Locked;

        while (m_pipeSpawns.Count < m_amountOfPipes)
        {
            Vector3 randomPos = Random.insideUnitSphere * 10;
            randomPos.y = 0;
            Collider[] colliderOverlap = Physics.OverlapSphere(randomPos, 3);

            if(colliderOverlap.Length == 0)
            {
                m_spawnedPipes = Instantiate(m_pipePrefab, new Vector3(randomPos.x, 0, randomPos.z), Quaternion.identity);
                Vector3 randomLook = Random.insideUnitSphere + m_spawnedPipes.transform.position;
                randomLook.y = 0;
                m_spawnedPipes.transform.LookAt(randomLook);
                m_pipeSpawns.Add(m_spawnedPipes);
            }
        }

        m_bubbleSpawner = StartCoroutine(BubblesSpawner());
    }`}
              },
              {
                title: "Popping Bubbles",
                description: "Launch the trident to pop the bubbles"
              },
              {
                title: "Dodge the Bombs",
                description: "There are bomb bubbles that you need to dodge while popping the other bubbles",
                codeSnippet: {
                  language: "csharp", 
                  title:"Bomb Bubble Code Snippet",
                  code:`    void Update()
    {
        if (transform.position.y <= 5)
        {
            transform.position = Vector3.Lerp(transform.position, transform.position + Vector3.up * 5, Time.deltaTime / m_lerpTime);
        }
        else
        {
            transform.position = Vector3.Lerp(transform.position, m_PlayerControls.transform.position, Time.deltaTime / m_lerpTime);
        }
    }`
                }
              },
              {
                title: "Boss Bubble",
                description: "Get enough point to face the boss bubble. which comes with its own unique mechanics and attacks",
                codeSnippet: {
                  language: "csharp", 
                  title:"Boss Bubble Code Snippet",
                  code:`    #region Spawner
    private void SpawnBombs()
    {
        int spawnBombs = Random.Range(5, 10);
        for (int i = 0; i < spawnBombs; i++)
        {
            Vector3 randomPos = Random.insideUnitSphere * 3.5f + transform.position;
            Instantiate(GameManager.Instance.m_bombPrefab, randomPos, Quaternion.identity);
        }
        StartCoroutine(Timer());
    }

    private IEnumerator Timer()
    {
        yield return new WaitForSeconds(m_spawnTime);
        SpawnBubbles();
    }

    private void SpawnBubbles()
    {
        StopCoroutine(Timer());
        for (int i = 0; i < 20; i++)
        {
            Vector3 randomPos = Random.insideUnitSphere * 5 + transform.position;
            GameObject SpawnedBubble = Instantiate(m_bossBubblePrefab, randomPos, Quaternion.identity);
            m_spawnedBubbleList.Add(SpawnedBubble);
        }
    }
    #endregion`
                }
              },
              {
                title: "Endless Mode",
                description: "After defeating the boss bubble for the first time you can go into endless mode which is endless amounts of fun(and popping bubbles ;))",
                codeSnippet: {
                  language: "csharp",
                  title:"Bubble spawns Code Snippet",
                  code:`    private IEnumerator BubblesSpawner()
    {
        while (!m_bossSpawned)
        {
            int randomPipe = Random.Range(0, m_pipeSpawns.Count);
            int randombomb = Random.Range(0, 20);
            int randomBubble = Random.Range(0, m_bubblePrefab.Length);
            if(randombomb == 5)
            {
                Instantiate(m_bombPrefab, m_pipeSpawns.ElementAt(randomPipe).transform.position, Quaternion.identity);
            }
            else
            {
                Instantiate(m_bubblePrefab[randomBubble], m_pipeSpawns.ElementAt(randomPipe).transform.position, Quaternion.identity);
            }
 
            yield return new WaitForSeconds(m_wait);
        }
    }`
              }}
              ]}
            liveLink="https://gohanblade.itch.io/trident-pop"
            githubLink="https://github.com/RodneyWillems/GLOBALJAM2025"
            onModalStateChange={handleModalStateChange}
          />

          <ProjectCard 
            projectId="Asteroids3D"
            media={[
              { type: 'image', src: "/img/Asteroids3D/MainMenu.webp", alt: "Main Menu" },
              { type: 'image', src: "/img/Asteroids3D/InGame.webp", alt: "In Game" },              
            ]}
            title="Asteroids 3D" 
            techStack={["C#", "Unity"]} 
            description="The first project i made as a game developer was a 3D clone of the original asteroids game. With some additional features"
            features={[
              {
                title: "Shoot Asteroids",
                description: "Shoot the floating asteroids to gain points. But watch out they will split into 2 pieces when you destroy them!",
                codeSnippet: {
                  language: "csharp", 
                  title:"Loot reward Code Snippet", 
                  code:`private void OnCollisionEnter(Collision collision)
{
    if (collision.gameObject.tag == "bullet")
    {
        //Slaat de locatie op waar de astroid geraakt word.
        m_location = transform.position;

        //Als de tag van het gameObject "large Astroid" is dan worden er 2 medium Astroids gespawned(Die worden ook toegvoegd aan de lijst in GameManager).
        if (gameObject.tag == "large Astroid")
        {
            for (int i = 0; i < 2; i++)
            {
                GameObject mediumAstroid = Instantiate(m_mediumAstroidPrefab, new Vector3(m_location.x + i, m_location.y, m_location.z + i), Quaternion.identity);
                mediumAstroid.GetComponent<Rigidbody>().AddExplosionForce(250, collision.contacts[0].point, 5);
                m_gameManager.AddAstroids(mediumAstroid);
            }
        }

        //Als de tag van het gameObject "medium Astroid" is dan worden er 2 kleine Astroids gespawned (Die worden ook toegvoegd aan de lijst in GameManager).
        if (gameObject.tag == "medium Astroid")
        {
            for (int i = 0; i < 2; i++)
            {

                GameObject smallAstroid = Instantiate(m_smallAstroidPrefab, new Vector3(m_location.x + i, m_location.y, m_location.z + i), Quaternion.identity);
                smallAstroid.GetComponent<Rigidbody>().AddExplosionForce(250, collision.contacts[0].point, 5);
                m_gameManager.AddAstroids(smallAstroid);
            }
        }

        //Voert de Addscore() functie uit gamemanager uit.
        m_gameManager.AddScore(points);

        //Haalt de geraakte asteroid uit de lijst.
        m_gameManager.RemoveAstroid(gameObject);

        m_audioManager.PlaySFX(m_audioManager.destroy);

        Destroy(gameObject);

    }
}`
                }
              },
              {
                title: "Pick Ups",
                description: "Look out for the squares on the screen they can either give you a boost or slow you down",
                codeSnippet:{
                  language: "csharp",
                  title:"Pick Up Code Snippet",
                  code:`    private void Awake()
    {
        m_gameManager = FindObjectOfType<GameManager>();
        m_playerMovement = FindObjectOfType<PlayerMovement>();
    }

    //Met virtual geef je aan dat een class die overerft van deze class
    //deze funtie kan overschrijven.
    public virtual void Activate()
    {
        Destroy(gameObject);
        m_gameManager.RespawnPickups();
        Instantiate(m_explosionPrefab, transform.position, Quaternion.identity);
    }


    //Gaat stuk na zoveel seconden.
    void Update()
    {
        m_timeAlive -= Time.deltaTime;
        if (m_timeAlive <= 0)
        {
            Destroy(gameObject);
            m_gameManager.RespawnPickups();
        }
    }`
                }
              }, 
              {
                title: "Survive as long as possible",
                description: "You have 3 lives which can be restored but you need to be careful!"
              }, 
              ]}
            liveLink="https://deonide.itch.io/asteroids"
            githubLink="https://github.com/GLU-CSD/asteroids-3d-Deonide"
            onModalStateChange={handleModalStateChange}
          />
            

        </div>
      </main>

      {/* Footer with fade animation */}
      <div 
        className={`fixed bottom-0 left-0 w-full z-10 transition-all duration-300 ease-in-out ${
          isAnyModalOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
      </div>
    </div>
  );
}