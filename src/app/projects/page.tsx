'use client';
import { useState, useEffect, Suspense } from "react";
import Navbar from "@/Components/NavBar"; 
import ProjectCard from "@/Components/projectCard";
import Footer from "@/Components/Footer";

function ProjectsContent() {
  const [isAnyModalOpen, setIsAnyModalOpen] = useState(false);

  useEffect(() => {
    // Mobile detection logic can be added here if needed in the future
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
            projectId="LP Cafe"
            title="LP Cafe"
            techStack={["C#", "Unity"]}
            media={[              
              { type: 'image', src: "/Img/LPCafe/James_Talking.webp", alt: "JamesB Talking" },
              { type: 'image', src: "/Img/LPCafe/JamesB.png", alt: "JamesB" },
              { type: 'image', src: "/Img/LPCafe/Cafe.webp", alt: "Start Image" },
              { type: 'video', src: "/Img/LPCafe/RecordingSession.webm", alt: "Recording Session Video" },
              { type: 'video', src: "/Img/LPCafe/DialogueTool.webm", alt: "DialogueTool Video" },]
            }
            description="LP-Cafe is a visual novel/dating sim built in Unity that features a custom dialogue system and branching storylines. The game includes multiple romance options with unique character personalities and storylines, all supported by a sophisticated dialogue engine I built from scratch. I handled the complete audio production pipeline, including voice acting for JamesB the wanna be James Bond character, sound effects, and audio editing. The project showcases advanced Unity editor tools, including a visual node editor for dialogue creation, dynamic UI systems with smooth animations, and a comprehensive save system that tracks relationship progress and discovered character preferences. The game combines narrative design with technical systems to create an engaging interactive experience."
            features={[
                {
                  title: "Voice Acting and Audio Editing", 
                  description: "I performed all voice acting for JamesB the wanna be James Bond, and handled some of the audio for the game. This included recording dialogue, followed by professional editing in Audacity with noise reduction, sound level adjustments and timing optimization to integrate seamlessly with the dialogue system's typewriter effects.", 
                },
                {
                  title: "Dialogue Tool", 
                  description: "This dialogue tool lets you create complex, branching conversations using an intuitive node-based system. Each dialogue line, player choice, or condition is represented as a node, which you can connect to build dynamic dialogue trees with ease. Perfect for storytelling, quests, and interactive NPCs, the visual layout makes it easy to follow conversation flow, edit paths, and manage even the most intricate dialogue structure.",
                },
                {
                  title: "Different type of nodes",
                  description:"There are 4 different types of nodes in the dialogue tool: SingleChoice, MultiChoice, Setter and Condition. Each node type has its own unique functionality and can be used to create complex dialogue trees.",
                  codeSnippet:{
                    language: "csharp", 
                    title:"Getter/Setter Node", 
                    code: `private void PopulatePreferenceDropdown()
{
    if (m_bachelor == null)
    {
        preferenceDropdown.choices = new List<string> { "No bachelor selected" };
        preferenceDropdown.index = 0;
        return;
    }

    List<string> preferences = new List<string>();
    
    // Dynamically populate based on preference type
    if (m_isLikePreference && m_bachelor._likes != null)
    {
        foreach (var like in m_bachelor._likes)
        {
            preferences.Add(like.description);
        }
    }
    else if (!m_isLikePreference && m_bachelor._dislikes != null)
    {
        foreach (var dislike in m_bachelor._dislikes)
        {
            preferences.Add(dislike.description);
        }
    }

    // Update dropdown with validation
    if (preferences.Count > 0)
    {
        preferenceDropdown.choices = preferences;
        
        // Maintain selection if valid
        int currentIndex = preferences.IndexOf(m_selectedPreference);
        preferenceDropdown.index = currentIndex >= 0 ? currentIndex : 0;
        m_selectedPreference = preferences[preferenceDropdown.index];
    }
    else
    {
        preferenceDropdown.choices = new List<string> { "No preferences found" };
        preferenceDropdown.index = 0;
        m_selectedPreference = "";
    }
}

private void OnPreferenceSelectionChanged(ChangeEvent<string> evt)
{
    m_selectedPreference = evt.newValue;
    EditorUtility.SetDirty(target);
    
    // Real-time validation feedback
    ValidatePreferenceSelection();
}`}
                },
                {
                  title: "Saving and Loading in Dialogue trees",
                  description: "This code saves and loads the current state of a dialogue tree, whether it is in a group of nodes or an ungrouped node, what type of node (SingleChoice, MultiChoice, etc.) it is, and the current node ID. It also handles the saving and loading of the current dialogue line, connections between nodes, and conditions.",
                  codeSnippet: {
                    language: "csharp", 
                    title:"Saving and Loading in Dialogue trees", 
                    code: `                        private static void SaveNodeToScriptableObject(NodeBase node, DSDialogueContainerSO dialogueContainer)
        {
            DSDialogueSO dialogue;

            if (node.m_nodeGroup != null)
            {
                dialogue = CreateAsset<DSDialogueSO>(
                    $"{m_containerFolderPath}/Groups/{node.m_nodeGroup.title}/Dialogues",
                    node.m_nodeDialogueName
                );

                dialogueContainer.m_containerDialogueGroupsData.AddItem(
                    m_createdDialogueGroups[node.m_nodeGroup.m_groupID],
                    dialogue
                );
            }
            else
            {
                dialogue = CreateAsset<DSDialogueSO>(
                    $"{m_containerFolderPath}/Global/Dialogues",
                    node.m_nodeDialogueName
                );

                dialogueContainer.m_containerUngroupedDialoguesData.Add(dialogue);
            }

            if (
                node.m_nodeDialogueType == DSDialogueType.MultipleChoice
                || node.m_nodeDialogueType == DSDialogueType.SingleChoice
            )
            {
                dialogue.Initialize(
                    node.m_nodeDialogueName,
                    node.m_nodeText,
                    ConvertNodeChoics(node.m_nodeChoices),
                    node.m_nodeCharacterImage,
                    node.m_nodeAudio,
                    node.m_nodeDialogueType,
                    node.IsStartingNode()
                );
            }
            else if (node.m_nodeDialogueType == DSDialogueType.Condition)
            {
                dialogue.InitializeSetterNode(
                    node.m_nodeDialogueName,
                    node.m_operationType,
                    ConvertNodeChoics(node.m_nodeChoices),
                    node.m_valueToSet,
                    node.m_variableName,
                    node.m_loveScoreAmount,
                    node.m_boolValue,
                    node.m_nodeDialogueType,
                    node.m_loveMeter,
                    node.m_bachelor,
                    node.m_isLikePreference,
                    node.m_selectedPreference,
                    node.m_enumSetter,
                    node.IsStartingNode()
                );
            }
            else if (node.m_nodeDialogueType == DSDialogueType.Setter)
            {
                dialogue.InitializeSetterNode(
                    node.m_nodeDialogueName,
                    node.m_operationType,
                    ConvertNodeChoics(node.m_nodeChoices),
                    node.m_valueToSet,
                    node.m_variableName,
                    node.m_loveScoreAmount,
                    node.m_boolValue,
                    node.m_nodeDialogueType,
                    node.m_loveMeter,
                    node.m_bachelor,
                    node.m_isLikePreference,
                    node.m_selectedPreference,
                    node.m_enumSetter,
                    node.IsStartingNode()
                );
            }

            m_createdDialogues.Add(node.m_nodeID, dialogue);

            SaveAsset(dialogue);
        }
                
                },`
                  }}
                

            ]}
            liveLink="https://tanixgames.itch.io/lp-cafe"
            githubLink="https://github.com/Beer-de-Vreeze/LP-Cafe"
            onModalStateChange={handleModalStateChange}
          />

            <ProjectCard 
            projectId="RogueLikeCardGame"
            media={[
              { type: 'image', src: "/Img/RogueLikeCardGame/InGame.png", alt: "In Game Screen" },
              { type: 'image', src: "/Img/RogueLikeCardGame/WinScreen.png", alt: "Win screen" },
              { type: 'image', src: "/Img/RogueLikeCardGame/CardSelection.png", alt: "Card selection" },
              { type: 'image', src: "/Img/RogueLikeCardGame/Shop.png", alt: "Shop" },
            ]}
            title="Roguelike Card Game" 
            techStack={["C#", "Unity"]} 
            description="Is a strategic card game where you build your deck by defeating enemies or buying new cards from the shop. Each turn, you play cards using a limited pool of energy, which can be upgraded over time to unlock stronger combos and strategies. As you progress, enemies grow tougher and choices become more impactful. With no final boss and no end in sight, the challenge is to see how far your deck can take you in an endless cycle of battles, upgrades, and adaptation."
            features={[
              {
                title: "Hand visuals",
                description: "This method arranges cards in a smooth, curved layout to make the hand look neat and readable. A single card is centered, while multiple cards are spread out with slight rotation and height differences. The layout updates automatically as cards are added or removed.",
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
                title: "Arc Renderer",
                description: "This code draws a curved line made of dots between two points, like a visual arc. It automatically spaces and shows the dots, and places an arrow pointing in the direction of the curve. The arc adjusts smoothly based on distance, making it perfect for aiming or targeting visuals.",
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
                description: "This code checks if the player has enough money to buy a card. If they do, the cost is deducted, the card is added to their deck, and the UI is updated. It's used to handle buying cards from the shop during gameplay.",
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
                title: "Slay enemies and gain a reward of gold and cards",
                description: "This code handles what happens when cards and gold drop after a battle. It randomly spawns cards based on rarity (common to legendary), then adds gold based on how many enemies were defeated. The cards are displayed, and the shop buttons are activated for the player to choose from. This code triggers when the player clicks on the get reward button.",
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
            techStack={["Unity"]}            media={[              
              { type: 'image', src: "/Img/Shaders/ShaderVisuals.png", alt: "Shader Visuals" },
              { type: 'image', src: "/Img/Shaders/Color.png", alt: "Shader Graph" },
              { type: 'image', src: "/Img/Shaders/Dither.png", alt: "Shader Graph 2" },
              { type: 'image', src: "/Img/Shaders/Base.png", alt: "Shader Graph 3" },
            ]}
            coverImage=""
            description="Some Shaders"
            features={[
                {
                  title: "Learning to work with shadergraphs", 
                  description: "While working on this project I learned a little bit about working with shadergraphs in Unity. I made a couple of different shaders to learn how to use them. Like: a Dither shader, a color shader, an emission shader and a basic lighting shader.",
                },
                {
                  title:" Dither Shader",
                  description:"This shader uses a dither effect to create a pixelated look. It can be used to create a retro style or to reduce the number of colors in an image.",
                },
                {
                  title:"Color Shader",
                  description:"A basic color shader.",
                },
                {
                  title:"Emission Shader",
                  description:"An emission shader is a type of material shader used in 3d graphics that makes an object appear as if its emits light. The material also doesnt reflect or respond to lighting in the scene like other materials instead, it looks self-illuminated.",                },
            ]}

            liveLink=""
            githubLink=""
            onModalStateChange={handleModalStateChange}
        />
          <ProjectCard 
            projectId="TridentPop"            media={[
              { type: 'image', src: "/Img/TridentPop/Icon.png", alt: "Project thumbnail" },
              { type: 'image', src: "/Img/TridentPop/MainMenu.png", alt: "Main Menu" },
              { type: 'image', src: "/Img/TridentPop/BossBubble.png", alt: "Boss Bubble" },
              { type: 'image', src: "/Img/TridentPop/InGame.png", alt: "In Game" },
            ]}
            title="Trident Pop" 
            techStack={["C#", "Unity"]} 
            description="Is a bubble-popping game created during the Global Game Jam 2025 at Grafisch Lyceum Utrecht, based on the theme “Bubbles.” At the start of each game, a set of bubble spawners is randomly selected, ensuring each run feels fresh. Bubbles spawn from these locations, and you throw your trident to pop them but there’s a twist: when you hit a bubble, you teleport to its position, adding a fast-paced movement mechanic to every throw. As your score climbs, the tension rises reach a certain threshold, and you'll trigger an intense boss fight that puts all your skills to the test. With unpredictable spawns, dynamic movement, and a surprise mid-game showdown, Trident Pop delivers a unique and energetic experience."
            features={[
              {
                title: "Random bubble spawns which change each game",
                description: "Randomly spawns a set number of pipe objects within a defined area at the start of the game. It ensures pipes don’t overlap by checking nearby space before spawning each one. After placing the pipes, it starts a coroutine that handles spawning bubbles, setting up the main gameplay elements.",
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
                description: "Isn’t just about points, each successful hit teleports you to the bubble’s position, letting you dart across the battlefield with lightning-fast moves. Rack up enough pops and prepare yourself, because a fierce boss fight awaits, testing every bit of your skill and precision."
              },
              {
                title: "Dodge the Bombs",
                description: "Watch out for bomb bubbles! Unlike regular bubbles, hitting these explosive bubbles will cause them to explode making you take damage.",
              },
              {
                title: "Boss Bubble",
                description: "A tough challenge surrounded by a protective barrier that only lets you hit it from behind. Every successful hit spawns even more bubbles, turning the fight into a fast-paced battle of skill and strategy. Can you outsmart the barrier, dodge the chaos, and claim victory?",
                codeSnippet: {
                  language: "csharp", 
                  title:"Boss Bubble Code Snippet",
                  code:`   private void SpawnBombs()
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
    `
                }
              },
              {
                title: "Endless Mode",
                description: "After defeating the boss bubble for the first time you can go into endless mode which is endless amounts of fun (and popping bubbles ;))",
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
            projectId="Asteroids3D"            media={[
              { type: 'image', src: "/Img/Asteroids3D/MainMenu.webp", alt: "Main Menu" },
              { type: 'image', src: "/Img/Asteroids3D/InGame.webp", alt: "In Game" },              
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
                  title:"Splitting Asteroids", 
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
      >      </div>
      <Footer />
    </div>
  );
}

export default function Projects() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProjectsContent />
    </Suspense>
  );
}