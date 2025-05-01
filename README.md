# Dead Man's Hand

## Goal
The goal of our project is to raise awareness about the manipulation tactics commonly used in the gaming industry to encourage gambling behaviors among players. <br> <br>
To achieve this, we developed a simulation game that highlights five key tactics: Shop Limitations, Packs/Gacha Mechanics, Leaderboard Pressure, Currency Manipulation, and Artificial Scarcity. Each tactic is integrated into the gameplay to demonstrate how these systems subtly influence player behavior and spending decisions.

## MVP
Our MVP consists of an engaging, visually striking website designed to showcase our game and its core mechanics. The site includes five main pages that each highlight a specific manipulation tactic, as well as a T.A.S.K. page for post-game reflection. <br>
<br>
The game is presented through a dark, thematic aesthetic that uses rich purples and vibrant greens to catch the eye. This color scheme, paired with eerie characters inspired by twisted, undead animals, reflects the deeper theme behind the title Dead Man’s Hand. These characters represent the destructive cycle of gambling addiction—players are drawn into a trap without fully realizing the psychological tactics being used. Like cursed pirates stuck in their ways, players can become “dead” to the world around them, unable to escape.

### Game Structure
The gameplay spans five in-game days. Each day imposes limits on what the player can do—how many characters they can buy in the Shop, how many Packs they can open, and how many Battles they can play. This creates a sense of urgency and encourages daily engagement. At the start, players receive one low-tier card of each type: Tank, Attack, and Support. Competing in battles early on is challenging, especially since other players may already have stronger cards. This difficulty is intentional—it triggers a player's desire to improve their deck quickly.

### Manipulation Tactic 1: Shop
In the Shop page, players can purchase up to three characters per day. Characters are sorted by rarity, from common (low-cost, low-rank) to rare (high-cost, high-rank). Rare cards cost gems, a more premium currency. Because of the daily limit and uncertainty of which cards will appear the next day, players feel pressured to buy the rare ones while they can—manipulating them into spending more than they intended.

### Manipulation Tactic 2: Packs / Gacha Mechanics
The Packs page features three pack types: Standard, Medium, and Premium, each offering progressively stronger cards. The higher the quality, the more expensive the pack—especially in terms of gems. Each pack contains three cards, but the results are random. Players may receive duplicates or cards they don’t want. However, there’s a twist: a “Wish” feature. After opening a certain number of packs, players are guaranteed the “wanted” card displayed on a poster. This card is a rare, high-ranking one that players naturally strive to obtain. The five-pack daily limit means players must return each day to continue progressing toward their wish—fueling the “just one more day” mentality common in gacha systems.

### Manipulation Tactic 3: Leaderboard Pressure
The Leaderboard appears on both the homepage and its dedicated page, displaying rankings for Most Coins, Most Wins, and Biggest Collection. This appeals to different player archetypes—collectors, competitors, and achievers. The leaderboard keeps players striving to stay on top, even if it means spending more resources to do so.
When a player signs up, they receive a set amount of coins and gems. These currencies are used to buy cards and packs.

### Manipulation Tactic 4: Currency Manipulation
The Exchange page introduces real-world spending, allowing players to deposit $100 (simulated) and convert it to in-game gems. Gems can then be exchanged for coins (100 gems = 1,000 coins).This plays into a psychological trick: we perceive digital currency differently than physical money. Spending $5 might feel significant, but spending “500 gems” doesn’t. This currency framing encourages overspending, making players feel like they’re making a small trade when, in reality, they’re potentially spending real money impulsively.

### Manipulation Tactic 5: Artificial Scarcity
Each day comes with fixed limits—once the day ends, any unused opportunities to buy, battle, or collect are gone forever. This enforces a fear of missing out (FOMO). Players are pushed to max out their daily limits or risk falling behind. This scarcity pairs with all the other tactics, reinforcing the desire to return daily and spend more to “catch up” or “stay ahead.”

### T.A.S.K. Page – Reflective Scoring System
The final component of our MVP is the T.A.S.K. page, accessible from both the homepage and the day-switching modal. This page evaluates a player’s survivability, which is a gamified score reflecting how susceptible they were to manipulation tactics. The overall score is reflected, but a player can also look into a more in-depth breakdown. A low survivability score implies the player fell for many of the game’s manipulative systems.
Players receive individual scores in categories such as Spending, Gacha, and Tactics. For example, a low spending percentage  might indicate overuse of coins, gems, or even real money—especially weighted against premium purchases. <br>
On the right-hand side, a detailed breakdown of each manipulation tactic is provided, including:
How the tactic works
- Signs a player fell for it
- Tips to resist it in future gameplay
- This transforms the game into a learning experience—encouraging reflection on predatory systems found in real-world gambling and games.

## Steps for Setting Up

open terminal 

cd bridge-project 

npm install

## Steps for Running Frontend & Backend

open new terminal

cd bridge-project

npm run build

npx nodemon server.js





