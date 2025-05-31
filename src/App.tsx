import React, { useState } from 'react';
import Button from './components/Button';
import Card, { CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from './components/Card';
import TextField from './components/TextField';
import Checkbox from './components/Checkbox';
import Select from './components/Select';
import Switch from './components/Switch';
import Fab from './components/Fab';
import { Mail, Plus, Search, User } from 'lucide-react';

function App() {
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    role: 'user',
    notifications: true,
    terms: false
  });

  const handleChange = (field: string) => (value: string | boolean) => {
    setFormValues(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formValues);
  };

  return (
    <div className="min-h-screen bg-neutral-50 p-4 sm:p-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-neutral-900 mb-2">Material Design System</h1>
          <p className="text-lg text-neutral-600">A comprehensive design system built with React and Tailwind</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8">
            <Card>
              <CardHeader>
                <CardTitle>Registration Form</CardTitle>
                <CardDescription>Complete the form to create a new account</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <TextField 
                    label="Full Name" 
                    placeholder="John Doe"
                    value={formValues.name}
                    onChange={(e) => handleChange('name')(e.target.value)}
                    fullWidth
                    leadingIcon={<User size={18} />}
                  />
                  
                  <TextField 
                    label="Email Address" 
                    type="email"
                    placeholder="john.doe@example.com"
                    value={formValues.email}
                    onChange={(e) => handleChange('email')(e.target.value)}
                    fullWidth
                    leadingIcon={<Mail size={18} />}
                    helperText="We'll never share your email with anyone else."
                  />
                  
                  <Select
                    label="Select Role"
                    options={[
                      { value: 'user', label: 'User' },
                      { value: 'editor', label: 'Editor' },
                      { value: 'admin', label: 'Administrator' }
                    ]}
                    value={formValues.role}
                    onChange={(value) => handleChange('role')(value)}
                    fullWidth
                  />
                  
                  <div className="space-y-3">
                    <Switch
                      label="Enable notifications"
                      checked={formValues.notifications}
                      onChange={(e) => handleChange('notifications')(e.target.checked)}
                    />
                    
                    <Checkbox
                      label="I agree to the terms and conditions"
                      checked={formValues.terms}
                      onChange={(e) => handleChange('terms')(e.target.checked)}
                      helperText="You must accept the terms to continue"
                    />
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-end space-x-3">
                <Button variant="text">Cancel</Button>
                <Button onClick={handleSubmit}>Submit</Button>
              </CardFooter>
            </Card>
          </div>

          <div className="md:col-span-4 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Buttons</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-3 mb-4">
                  <Button>Primary</Button>
                  <Button color="secondary">Secondary</Button>
                  <Button color="tertiary">Tertiary</Button>
                </div>
                <div className="flex flex-wrap gap-3 mb-4">
                  <Button variant="outlined">Outlined</Button>
                  <Button variant="text">Text</Button>
                  <Button disabled>Disabled</Button>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button size="small">Small</Button>
                  <Button icon={<Search size={16} />}>With Icon</Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>FAB Examples</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-4">
                <Fab icon={<Plus />} />
                <Fab icon={<Plus />} color="secondary" size="small" />
                <Fab icon={<Plus />} color="tertiary" extended label="Create" />
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-6 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Typography</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <h1 className="text-4xl font-medium">Heading 1</h1>
                <h2 className="text-3xl font-medium">Heading 2</h2>
                <h3 className="text-2xl font-medium">Heading 3</h3>
                <h4 className="text-xl font-medium">Heading 4</h4>
                <h5 className="text-lg font-medium">Heading 5</h5>
                <h6 className="text-base font-medium">Heading 6</h6>
                <p className="text-base">Body 1: Regular paragraph text looks like this.</p>
                <p className="text-sm">Body 2: Smaller text for secondary information.</p>
                <p className="text-xs">Caption: Very small text for captions and supplementary info.</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="fixed bottom-6 right-6">
          <Fab icon={<Plus />} color="primary" aria-label="Add" />
        </div>
      </div>
    </div>
  );
}

export default App;