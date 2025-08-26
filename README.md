# Tiny Compiler

A simple compiler built from scratch in Python to demonstrate the key phases of compilation such as **lexical analysis, parsing, semantic analysis, intermediate code generation, optimization, and code generation**.

This project is intended for learning compiler design concepts and experimenting with a minimal compiler implementation.

---

## 🚀 Features

* **Lexer** (`lexer.py`): Tokenizes the input source code.
* **Parser** (`parser.py`): Builds the syntax tree from tokens.
* **AST** (`ast_tree`, `semantic_analyzer.py`): Handles semantic checks.
* **Intermediate Code** (`intermediate.py`): Generates intermediate representation.
* **Optimizer** (`optimizer.py`): Optimizes intermediate code.
* **Code Generation** (`codegen.py`): Produces target code.
* **Simulator** (`simulator.py`): Simulates the generated code execution.
* **Frontend** (`frontend/`): Input/output handling.

---

---

## ⚡ Getting Started

### 1. Clone the repository

git clone [https://github.com/ritingusain/tiny-compiler.git](https://github.com/ritingusain/tiny-compiler.git)
cd tiny-compiler


### 2. Install dependencies
Make sure you have Python 3 installed. Install PLY:
pip install ply


### 3. Run the compiler
python main.py test.c


## 📖 Learning Goals
Understand compiler phases step by step.

Gain hands-on experience with lexing, parsing, semantic analysis, and code generation.

Build a foundation for advanced compiler design.

## 📌 Future Improvements
Support more complex programming constructs.

Generate assembly code.

Add error handling and reporting.

## 👨‍💻 Author
Ritin Gusain
