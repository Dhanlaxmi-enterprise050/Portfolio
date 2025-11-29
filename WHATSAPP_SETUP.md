# WhatsApp Setup Instructions

## Update Your WhatsApp Number

You need to replace `YOUR_PHONE_NUMBER` with your actual WhatsApp number in the following files:

1. **components/Hero.tsx** (Line ~132)
   - Find: `href="https://wa.me/YOUR_PHONE_NUMBER"`
   - Replace with: `href="https://wa.me/91XXXXXXXXXX"` (include country code, no + or spaces)

2. **components/Contact.tsx** (Line ~115)
   - Find: `href="https://wa.me/YOUR_PHONE_NUMBER"`
   - Replace with: `href="https://wa.me/91XXXXXXXXXX"`

## Format

- **Country Code**: 91 (for India)
- **Phone Number**: Your 10-digit number
- **Example**: If your number is 9876543210, use: `https://wa.me/919876543210`

## Testing

After updating, test the links on both desktop and mobile to ensure they open WhatsApp correctly.

