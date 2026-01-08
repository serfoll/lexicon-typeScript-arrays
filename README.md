# Workshop: Lagerhantering & Kassan

**Ämne:** Arrayer, Loopar, Villkor och Logik.  
**Mål:** Att träna på att hantera listor, iterera över data och skriva logik för beslutsfattande.

---

## Instruktioner

_Lös uppgifterna i ordning. Försök att skriva koden ur minnet, men tveka inte att kolla i dina anteckningar om syntaxen._

### Steg 1: Array-hantering (Hyllan)

Vi börjar med att hantera varor i en butikshylla.

- [x] Skriv en kommentar: `// Steg 1: Arrayer`.
- [x] Deklarera en array (variabel) som heter `inventory`. Den ska innehålla tre strängar (varor), t.ex. `"Äpple"`, `"Banan"`, `"Apelsin"`.
- [x] **Lägg till:** En leverans har kommit! Använd metoden `.push()` för att lägga till `"Päron"` sist i listan.
- [x] **Ta bort:** En kund köpte den sista varan. Använd metoden `.pop()` för att ta bort den sista varan i listan.
- [x] **Infoga specifikt:** Vi vill lägga till `"Mango"` på den **andra** platsen i listan (index 1). Använd metoden `.splice()` för att göra detta utan att ta bort något annat.
- [x] **Logga:** Skriv ut hela listan i konsolen och kontrollera att ordningen är rätt.

---

### Steg 2: Iteration (Inventering)

Nu ska vi gå igenom lagret för att se vad vi har.

- [x] Skriv en kommentar: `// Steg 2: Loopar`.
- [x] **Den moderna loopen:** Använd en `for...of`-loop för att gå igenom `inventory`.
  - För varje vara ska du logga texten: `"Vara i lager: [Varan]"`.
- [x] **Den klassiska loopen:** Nu behöver vi veta numret på hyllan. Använd en klassisk `for`-loop (med `i = 0`, villkor och ökning).
  - Logga ut både index och varans namn.
  - Formatet ska vara: `"Hylla 0: Äpple"`, `"Hylla 1: Mango"` osv.

---

### Steg 3: Villkor (Lagerstatus)

Dags att kolla status på lagret och varna om det behövs.

- [x] Skriv en kommentar: `// Steg 3: Villkor`.
- [x] Skapa en variabel `stockCount` som automatiskt innehåller antalet varor i din array (Tips: använd egenskapen `.length`).
- [x] Skriv en `if / else if / else`-sats som kollar värdet på `stockCount`:
  - Om antalet är **0**: Logga `"Lagret är tomt!"`.
  - Om antalet är **större än 3**: Logga `"Lagret är fullt."`.
  - Annars (om inget av ovanstående stämmer): Logga `"Normal nivå på lagret."`.

---

### Steg 4: Kassan (Logiska Operatorer)

Här knyter vi ihop jämförelser och logiska operatorer (`&&`, `||`).

- [x] Skriv en kommentar: `// Steg 4: Kassan`.
- [x] Deklarera tre variabler:
  - `isMember` (boolean): Sätt till `true` eller `false`.
  - `hasCoupon` (boolean): Sätt till `true` eller `false`.
  - `totalPrice` (number): Sätt ett valfritt pris, t.ex. `1000`.
- [x] Skriv logik för rabatter med `if / else if / else`:
  - **Super-rabatt:** Om kunden är medlem **OCH** (`&&`) har en kupong -> Logga `"20% Rabatt!"`.
  - **Liten rabatt:** Om kunden är medlem **ELLER** (`||`) har en kupong -> Logga `"10% Rabatt!"`.
  - **Ingen rabatt:** Om inget av ovanstående gäller -> Logga `"Ordinarie pris"`.
- [x] **Testa:** Ändra värdena på `isMember` och `hasCoupon` och kör programmet igen för att se att alla tre utfall fungerar.

---

### Steg 5: Typsäkerhet (Jämförelser)

Vi ska dubbelkolla så att systemet inte gör fel vid inloggning.

- [x] Skriv en kommentar: `// Steg 5: Jämförelser`.
- [x] Deklarera en variabel `inputPin` som en sträng: `"1234"`.
- [x] Deklarera en variabel `correctPin` som ett nummer: `1234`.
- [x] Skriv en `if`-sats som jämför dessa två med **strikt likhet** (`===`).
  - Om de är lika: Logga `"Inloggad!"`.
  - Om de inte är lika: Logga `"Fel PIN eller datatyp!"`.
- [x] _Fundera på:_ Varför blir det inte inloggat trots att siffrorna ser likadana ut?
