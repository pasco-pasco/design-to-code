import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import { Home } from '@/pages/Home'
import { ButtonPage } from '@/pages/components/ButtonPage'
import { AlertPage } from '@/pages/components/AlertPage'
import { CardPage } from '@/pages/components/CardPage'
import { CheckboxPage } from '@/pages/components/CheckboxPage'
import { DialogPage } from '@/pages/components/DialogPage'
import { InputPage } from '@/pages/components/InputPage'
import { LabelPage } from '@/pages/components/LabelPage'
import { SkeletonPage } from '@/pages/components/SkeletonPage'
import { SwitchPage } from '@/pages/components/SwitchPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="components/button" element={<ButtonPage />} />
          <Route path="components/alert" element={<AlertPage />} />
          <Route path="components/card" element={<CardPage />} />
          <Route path="components/checkbox" element={<CheckboxPage />} />
          <Route path="components/dialog" element={<DialogPage />} />
          <Route path="components/input" element={<InputPage />} />
          <Route path="components/label" element={<LabelPage />} />
          <Route path="components/skeleton" element={<SkeletonPage />} />
          <Route path="components/switch" element={<SwitchPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
