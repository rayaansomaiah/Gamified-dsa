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

const PostfixToInfixGame: React.FC = () => {
  const [expression, setExpression] = useState('');
  const [stack, setStack] = useState<string[]>([]);
  const [infix, setInfix] = useState<string>('');
  const [steps, setSteps] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentStep, setCurrentStep] = useState<number>(0);

  // Add example data when component mounts
  useEffect(() => {
    setExpression('abc*+');
  }, []);

  const handleExpressionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExpression(e.target.value);
  };

  const handleConvert = async () => {
    setIsProcessing(true);
    setCurrentStep(0);
    setStack([]); // Reset stack
    setSteps([]); // Reset steps
    
    const stackInstance = new ArrayStack();
    const newSteps: string[] = [];

    for (const char of expression.split('')) {
      if (!/[+\-*/^()]/.test(char)) {
        stackInstance.push(char);
        newSteps.push(`Push operand '${char}' onto stack`);
        setStack([...stackInstance.getStack()]);
        setSteps(prev => [...prev, `Push operand '${char}' onto stack`]);
        await new Promise(resolve => setTimeout(resolve, 500)); // Add delay for visualization
      } else {
        const operand2 = stackInstance.pop()!;
        const operand1 = stackInstance.pop()!;
        const newExpr = `(${operand1}${char}${operand2})`;
        stackInstance.push(newExpr);
        newSteps.push(`Pop operands '${operand1}' and '${operand2}', push '${newExpr}'`);
        setStack([...stackInstance.getStack()]);
        setSteps(prev => [...prev, `Pop operands '${operand1}' and '${operand2}', push '${newExpr}'`]);
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    }

    setInfix(stackInstance.pop()!);
    setIsProcessing(false);
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
def postfix_to_infix(expression):
    stack = []

    for char in expression:
        if char.isalnum():
            stack.append(char)
        else:
            operand2 = stack.pop()
            operand1 = stack.pop()
            stack.append(f'({operand1}{char}{operand2})')

    return stack.pop()
`;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Postfix to Infix Conversion</h1>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Enter Expression:</label>
            <input
              type="text"
              value={expression}
              onChange={handleExpressionChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Enter a postfix expression (e.g., abc*+)"
            />
          </div>
          <button
            onClick={handleConvert}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700"
          >
            Convert
          </button>
          
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Infix Expression</h2>
            <div className="p-4 bg-gray-100 rounded-lg">{infix || 'No expression entered'}</div>
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
            <h3 className="text-xl font-bold text-gray-800 mb-4">Python Postfix to Infix Implementation</h3>
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

export default PostfixToInfixGame;
