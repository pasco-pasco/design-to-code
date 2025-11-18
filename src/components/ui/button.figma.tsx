import figma from '@figma/code-connect'
import { Button } from './button'

/**
 * Code Connect for shadcn/ui Button component
 * Links the React implementation to Figma design system
 * 
 * This mapping handles all 186 Button variants dynamically by
 * reading Figma component set properties and mapping them to React props.
 * 
 * Properties mapped:
 * - Variant (default, secondary, destructive, outline, ghost, link)
 * - Size (default, sm, lg, icon)
 * - Button Text (children)
 */

figma.connect(
  Button,
  'https://www.figma.com/design/zNtzZomzpbSsc3vhLp00z0/shadcn-ui?node-id=37-931',
  {
    props: {
      variant: figma.enum('Variant', {
        Default: 'default',
        Secondary: 'secondary',
        Destructive: 'destructive',
        Outline: 'outline',
        Ghost: 'ghost',
        Link: 'link',
      }),
      size: figma.enum('Size', {
        default: 'default',
        sm: 'sm',
        lg: 'lg',
        icon: 'icon',
        'icon-sm': 'sm',
        'icon-lg': 'lg',
      }),
      children: figma.string('Button Text'),
    },
    example: (props) => (
      <Button 
        variant={props.variant}
        size={props.size}
      >
        {props.children}
      </Button>
    ),
  }
)

