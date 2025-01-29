import React, { useState, useEffect } from 'react';

// Stack implementation using array
class ArrayStack {
  private stack: string[] = [];
  
  push(value: string) {
    this.stack.push(value);
  }
  
  pop(): string | undefined {
    return this.stack.pop();
  }
  
  peek(): string | undefined {
    return this.stack[this.stack.length - 1];
  }
  
  isEmpty(): boolean {
    return this.stack.length === 0;
  }
  
  getStack(): string[] {
    return this.stack;
  }
}

// Stack implementation using linked list
class LinkedListStack {
  private head: { value: string, next: any } | null = null;
  
  push(value: string) {
    this.head = { value, next: this.head };
  }
  
  pop(): string | undefined {
    if (!this.head) return undefined;
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }
  
  peek(): string | undefined {
    return this.head?.value;
  }
  
  isEmpty(): boolean {
    return this.head === null;
  }
  
  getStack(): string[] {
    const stack: string[] = [];
    let current = this.head;
    while (current) {
      stack.push(current.value);
      current = current.next;
    }
    return stack;
  }
}

const InfixToPostfixGame: React.FC = () => {
  const [expression, setExpression] = useState('');
  const [stackType, setStackType] = useState<'array' | 'linkedList'>('array');
  const [stack, setStack] = useState<string[]>([]);
  const [postfix, setPostfix] = useState<string>('');
  const [steps, setSteps] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentStep, setCurrentStep] = useState<number>(0);

  // Add example data when component mounts
  useEffect(() => {
    setExpression('a+b*c');
  }, []);

  const handleExpressionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpression(e.target.value);
  };

  const handleStackTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStackType(e.target.value as 'array' | 'linkedList');
  };

  const handleConvert = async () => {
    setIsProcessing(true);
    setCurrentStep(0);
    setStack([]); // Reset stack
    setSteps([]); // Reset steps
    
    const stackInstance = stackType === 'array' ? new ArrayStack() : new LinkedListStack();
    const output: string[] = [];
    const newSteps: string[] = [];

    for (const char of expression.split('')) {
      if (!/[+\-*/^()]/.test(char)) {
        output.push(char);
        newSteps.push(`Add operand '${char}' directly to output`);
        setSteps(prev => [...prev, `Add operand '${char}' directly to output`]);
      } else if (char === '(') {
        stackInstance.push(char);
        newSteps.push(`Push '(' onto stack`);
        setStack([...stackInstance.getStack()]);
        setSteps(prev => [...prev, `Push '(' onto stack`]);
        await new Promise(resolve => setTimeout(resolve, 500)); // Add delay for visualization
      } else if (char === ')') {
        while (stackInstance.peek() !== '(') {
          const popped = stackInstance.pop()!;
          output.push(popped);
          newSteps.push(`Pop operator '${popped}' from stack and add to output`);
          setStack([...stackInstance.getStack()]);
          setSteps(prev => [...prev, `Pop operator '${popped}' from stack and add to output`]);
          await new Promise(resolve => setTimeout(resolve, 500));
        }
        stackInstance.pop();
        setStack([...stackInstance.getStack()]);
        newSteps.push(`Remove '(' from stack`);
        setSteps(prev => [...prev, `Remove '(' from stack`]);
        await new Promise(resolve => setTimeout(resolve, 500));
      } else {
        while (!stackInstance.isEmpty() && precedence(stackInstance.peek()!) >= precedence(char)) {
          const popped = stackInstance.pop()!;
          output.push(popped);
          newSteps.push(`Pop operator '${popped}' due to higher precedence`);
          setStack([...stackInstance.getStack()]);
          setSteps(prev => [...prev, `Pop operator '${popped}' due to higher precedence`]);
          await new Promise(resolve => setTimeout(resolve, 500));
        }
        stackInstance.push(char);
        newSteps.push(`Push operator '${char}' onto stack`);
        setStack([...stackInstance.getStack()]);
        setSteps(prev => [...prev, `Push operator '${char}' onto stack`]);
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    }

    while (!stackInstance.isEmpty()) {
      const popped = stackInstance.pop()!;
      output.push(popped);
      newSteps.push(`Pop remaining operator '${popped}' from stack`);
      setStack([...stackInstance.getStack()]);
      setSteps(prev => [...prev, `Pop remaining operator '${popped}' from stack`]);
      await new Promise(resolve => setTimeout(resolve, 500));
    }

    setPostfix(output.join(' '));
    setIsProcessing(false);
  };

  const precedence = (operator: string) => {
    switch (operator) {
      case '+':
      case '-':
        return 1;
      case '*':
      case '/':
        return 2;
      case '^':
        return 3;
      default:
        return 0;
    }
  };

  // Helper function to determine stack item color and animation
  const getStackItemStyle = (value: string, index: number) => {
    const isOperator = /[+\-*/^()]/.test(value);
    const isNew = index === stack.length - 1;
    
    return `
      p-2 rounded text-center
      ${isOperator ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}
      ${isNew && isProcessing ? 'animate-bounce' : ''}
      transition-all duration-300 ease-in-out
    `;
  };

  const pythonCode = `
def infix_to_postfix(expression):
    precedence = {'+': 1, '-': 1, '*': 2, '/': 2, '^': 3}
    stack = []
    output = []

    for char in expression:
        if char.isalnum():
            output.append(char)
        elif char == '(':
            stack.append(char)
        elif char == ')':
            while stack and stack[-1] != '(':
                output.append(stack.pop())
            stack.pop()
        else:
            while stack and precedence.get(char, 0) <= precedence.get(stack[-1], 0):
                output.append(stack.pop())
            stack.append(char)

    while stack:
        output.append(stack.pop())

    return ''.join(output)
`;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Infix to Postfix Conversion</h1>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Enter Expression:</label>
            <input
              type="text"
              value={expression}
              onChange={handleExpressionChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter an infix expression (e.g., a+b*c)"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Select Stack Implementation:</label>
            <select value={stackType} onChange={handleStackTypeChange} className="w-full p-2 border border-gray-300 rounded">
              <option value="array">Array-based Stack</option>
              <option value="linkedList">Linked List-based Stack</option>
            </select>
          </div>
          <button
            onClick={handleConvert}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700"
          >
            Convert
          </button>
          
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Postfix Expression</h2>
            <div className="p-4 bg-gray-100 rounded-lg">{postfix || 'No expression entered'}</div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Stack Visualization</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-2 border-gray-200 rounded-lg p-4">
                <div className="flex flex-col-reverse space-y-reverse space-y-2">
                  {stack.map((value, index) => (
                    <div
                      key={index}
                      className={getStackItemStyle(value, index)}
                    >
                      {value}
                      {index === stack.length - 1 && (
                        <span className="text-xs text-gray-500 block">← Top</span>
                      )}
                    </div>
                  ))}
                  {stack.length === 0 && (
                    <div className="text-gray-400 text-center p-8 border-2 border-dashed border-gray-200 rounded">
                      <p>Stack is empty</p>
                      <p className="text-sm mt-2">Enter an expression and click Convert to see the stack in action</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="border-2 border-gray-200 rounded-lg p-4">
                <h4 className="font-medium mb-2">Conversion Steps:</h4>
                <ol className="list-decimal list-inside text-sm text-gray-600">
                  {steps.map((step, index) => (
                    <li 
                      key={index} 
                      className={`mb-1 p-1 rounded ${
                        currentStep === index ? 'bg-yellow-100' : ''
                      }`}
                    >
                      {step}
                    </li>
                  ))}
                  {steps.length === 0 && (
                    <p className="text-gray-400 italic">Steps will appear here during conversion</p>
                  )}
                </ol>
              </div>
            </div>
          </div>
          <div className="w-full mt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Python Infix to Postfix Implementation</h3>
            <pre className="bg-gray-300 p-4 rounded-lg overflow-x-auto">
              <code className="language-python">
                {pythonCode}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfixToPostfixGame;
