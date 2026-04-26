The philosopher of computing Bill Rapaport noted three Great Insights of Computer Science:[72]

Gottfried Wilhelm Leibniz's, George Boole's, Alan Turing's, Claude Shannon's, and Samuel Morse's insight: there are only two objects that a computer has to deal with in order to represent "anything".[note 4]
All the information about any computable problem can be represented using only 0 and 1 (or any other bistable pair that can flip-flop between two easily distinguishable states, such as "on/off", "magnetized/de-magnetized", "high-voltage/low-voltage", etc.).
See also: Digital physics
Alan Turing's insight: there are only five actions that a computer has to perform in order to do "anything".
Every algorithm can be expressed in a language for a computer consisting of only five basic instructions:[73]
move left one location;
move right one location;
read symbol at current location;
print 0 at current location;
print 1 at current location.
See also: Turing machine
Corrado Böhm and Giuseppe Jacopini's insight: there are only three ways of combining these actions (into more complex ones) that are needed in order for a computer to do "anything".[74]
Only three rules are needed to combine any set of basic instructions into more complex ones:
sequence: first do this, then do that;
selection: IF such-and-such is the case, THEN do this, ELSE do that;
repetition: WHILE such-and-such is the case, DO this.
The three rules of Boehm's and Jacopini's insight can be further simplified with the use of goto (which means it is more elementary than structured programming).

Some interesting information on the history of computer science and symbolic logic: 

George Boole: The Algebraic Foundation
The treatment of logic in England began to fundamentally change when George Boole published a short book in 1847 called The Mathematical Analysis of Logic, in which he developed the notion that logical relations could be expressed by algebraic formulas. utm This was the conceptual seed of everything that followed. In a follow-up book published in 1854, An Investigation of the Laws of Thought, Boole set out to create a completely general method in logic. utm
Crucially, Boole showed that syllogistic reasoning — the basic architecture of deductive thought — could be made mechanical: syllogistic reasoning involves reducing two class equations (premises) to one equation (conclusion), eliminating the middle term, and then solving the equation of the conclusion for the subject term — the mechanical nature of these steps is apparent. utm
This algebraic rendering of logic is directly upstream of binary computation: Boole's symbolic treatment of classes (0s and 1s for empty/non-empty) is the conceptual ancestor of Boolean logic in digital circuits.

Carroll and Symbolic Logic: Extending Boole Toward Mechanization
Carroll (Charles Dodgson) absorbed Boole's framework and pushed it toward something even more computationally significant — mechanical reasoning procedures. The article identifies several key contributions:
1. Carroll Diagrams — A More Scalable Visual Logic
Carroll diagrams are easier to draw for a large number of sets because they are self-similar, and their regularity makes it simpler to locate and erase cells corresponding to classes destroyed by the premises of an argument. utm This self-similarity is algorithmically important — it suggests a recursive structure compatible with how computers process data.
2. The Method of Trees — An Early Proof Algorithm
This is Carroll's most significant contribution to the CS/AI lineage. The essential characteristic of this method is that it uses a reductio ad absurdum approach, where in order to prove that a set of retinends is a nullity (empty), we start by assuming instead that it is an entity, then by a process of deduction arrive at a contradiction — this is the earliest modern use of a truth tree employed to reason efficiently in the logic of classes. utm
The tree method is a direct extension of truth tables, and migrating to trees from tables is easy to do. The truth tree method examines sets of cases simultaneously, thereby making it efficient to test the validity of arguments involving a very large number of sentences by hand or with a computer. utm
3. Anticipating Automated Theorem Proving
Dodgson was the first person in modern times to apply a mechanical procedure — his tree method — to demonstrate the validity of the conclusion of certain complex problems. utm
The article makes the connection to 20th-century computing explicit: Carroll's procedure bears a striking resemblance to the trees employed according to a method of "Semantic Tableaux" published in 1955 by the Dutch logician E. W. Beth — the basic ideas are identical. utm
4. Binary Resolution — The Core of Automated Deduction
His only inference rule, underscoring, which takes two propositions, selects a term in each of the same subject or predicate having opposite signs, and yields another proposition, is an example of binary resolution — the most important of these early proof methods in automated deduction. utm Binary resolution became a cornerstone of AI logic programming and automated reasoning systems in the 1960s onward.
5. Unit Preference and Set of Support Strategies
When Dodgson used his method of barred premises to verify a tree, he guided the generation of the ordered lists by employing an ordering strategy known now as unit preference, which selects first the propositions with the fewest number of terms. utm These strategies — which prevent fruitless search paths — are directly analogous to heuristics used in modern AI search and theorem-proving engines.

The Bridge: Automation of Deduction
The article's section on automation of deduction explicitly connects this lineage:
The beginning of the automation of deduction goes back to the 1920s, but it was not until the 1950s that computer programs, using a tree as the essential data structure, were used to prove mathematical theorems. The focus of these early programs was on proofs of theorems of propositional and predicate logic. utm
In 1985, one of Dodgson's puzzle problems was modified by Ewing Lusk and Ross Overbeek to be compatible with the direct generation of statements by an automated reasoning program utm — meaning Carroll's actual problems were being run through early AI systems over a century after he devised them.

The Through-Line
The intellectual chain is remarkably clean:
Boole → algebraized logic, making deduction symbolic and mechanical
Carroll → extended that into tree-based proof procedures, binary resolution, and search strategies
Mid-20th century → these same structures became the architecture of automated theorem proving and AI reasoning systems (Beth's tableaux, Hintikka, Smullyan, and eventually logic programming languages like Prolog)
Several of the methods Dodgson used in his Symbolic Logic contain kernels of concepts and techniques that have been employed in automatic theorem proving beginning in the twentieth century — foreshadowing modern concepts like truth trees, binary resolution, unit preference and set of support strategies, and refutation completeness. utm
The tragedy, noted throughout the article, is that Carroll's reputation as a children's author caused his logic work to be largely dismissed in his own time — meaning only in the twentieth century did some of his mathematical and logical ideas find application, in the sense that his work foreshadowed their use. 