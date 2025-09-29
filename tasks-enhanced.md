# Portfolio Website Redesign - Enhanced Plan (Multi-View Structure)

> Created: 2025-09-27
> Updated: 2025-09-27 (After reference site investigation)
> Status: Planning - Corrected Structure
> Reference: https://www.sakethrambilla.com/

## Overview

Complete redesign to match sakethrambilla.com with **multi-view navigation system** where each navigation link shows a completely different page view (not single-page scrolling).

## Key Corrections from Initial Plan

1. ✅ White background with noise texture - CORRECT
2. ❌ Single-page scrolling - INCORRECT → Should be multi-view system
3. ✅ Horizontal nav with social icons - CORRECT
4. ❌ All sections visible - INCORRECT → Only active view visible
5. ❌ Detailed project cards - INCORRECT → Minimal cards, separate detail pages
6. ❌ No hamburger menu - INCORRECT → Should have hamburger menu button
7. ❌ Typography sizes - Need adjustment to match reference

---

## Site Structure

### Multi-View System
- **Home View** (default on page load)
- **About View** (when About nav clicked)
- **Portfolio View** (when Portfolio nav clicked)
- **Services View** (when Services nav clicked)

Only ONE view visible at a time. Navigation switches between views.

---

## Enhanced Tasks

### CRITICAL: Navigation System

- [x] 1. Hamburger Menu Implementation
  - [x] 1.1 Add hamburger menu button at top right 
  - [x] 1.2 Menu button visible on ALL screen sizes (desktop + mobile)
  - [x] 1.3 Clicking hamburger opens slide-out menu panel
  - [x] 1.4 Menu panel includes: Home, About, Portfolio, Services
  - [x] 1.5 Menu panel has close button/overlay
  - [x] 1.6 Style menu panel: white background, minimal design
  - [x] 1.7 Add animation for menu open/close

- [x] 2. Multi-View Navigation System
  - [x] 2.1 Implement view switching JavaScript (show/hide views)
  - [x] 2.2 Only ONE view visible at a time
  - [x] 2.3 Home view active by default on page load
  - [x] 2.4 Clicking nav link hides current view, shows target view
  - [x] 2.5 Add active state to current navigation item
  - [x] 2.6 Smooth transition between views
  - [x] 2.7 Update URL hash for each view (#home, #about, #portfolio, #services)

### CRITICAL: Typography System

- [x] 3. Fix Typography to Match Reference
  - [x] 3.1 Main heading (name): Very large, bold (60-72px estimated)
  - [x] 3.2 Tagline: Medium size (20-24px estimated)
  - [x] 3.3 Section headings: Large, bold (32-40px estimated)
  - [x] 3.4 Body text: Standard readable size (16-18px)
  - [x] 3.5 Font family: System font stack (already correct)
  - [x] 3.6 Font weights: Use 300 (light), 400 (regular), 600 (semibold), 700 (bold)
  - [x] 3.7 Verify line heights for readability (1.5-1.8)

### HOME VIEW (Default Landing Page)

- [x] 4. Home View Structure
  - [x] 4.1 Hero section with large name heading
  - [x] 4.2 Tagline: "I build Software and AI solutions for businesses"
  - [x] 4.3 Brief intro paragraph (2-3 sentences about role/expertise)
  - [x] 4.4 Profile image positioned appropriately
  - [x] 4.5 Social icons (LinkedIn, GitHub) - if not in nav
  - [x] 4.6 Featured Work section heading
  - [x] 4.7 Featured Work subtitle/description
  - [x] 4.8 Display 2-3 featured project cards (minimal design)

- [x] 5. Home View - Minimal Project Cards
  - [x] 5.1 Card shows: Project name only (or name + 1 line description)
  - [x] 5.2 NO tech stack on home cards
  - [x] 5.3 NO detailed descriptions on home cards
  - [x] 5.4 NO buttons on home cards
  - [x] 5.5 Cards are clickable - click navigates to Portfolio view or project detail
  - [x] 5.6 Simple hover effect (subtle shadow or border)
  - [x] 5.7 Clean, minimal card styling

### ABOUT VIEW (Separate Page)

- [x] 6. About View Structure
  - [x] 6.1 Create dedicated About view container
  - [x] 6.2 Hidden by default, shown when About nav clicked
  - [x] 6.3 Large "About" heading at top
  - [x] 6.4 Full detailed biography (different from home intro)
  - [x] 6.5 Experience section with timeline/details
  - [x] 6.6 Education section with details
  - [x] 6.7 Interests/hobbies section
  - [x] 6.8 Clean layout with proper spacing

### PORTFOLIO VIEW (Separate Page)

- [ ] 7. Portfolio View Structure
  - [ ] 7.1 Create dedicated Portfolio view container
  - [ ] 7.2 Hidden by default, shown when Portfolio nav clicked
  - [ ] 7.3 Large "Portfolio" or "Featured Work" heading
  - [ ] 7.4 Subtitle describing projects
  - [ ] 7.5 Display ALL projects in grid (not just 2-3)
  - [ ] 7.6 Grid layout: 2-3 columns on desktop, 1 on mobile

- [ ] 8. Portfolio View - Minimal Project Cards
  - [ ] 8.1 Card structure: Just project name + very brief tagline
  - [ ] 8.2 NO tech stack visible on cards
  - [ ] 8.3 NO full descriptions on cards
  - [ ] 8.4 NO action buttons on cards
  - [ ] 8.5 Entire card is clickable
  - [ ] 8.6 Clicking card shows project detail view OR opens project page
  - [ ] 8.7 Minimal styling: white background, subtle border
  - [ ] 8.8 Hover effect: subtle shadow or scale

- [ ] 9. Project Detail Pages 
  - [ ] 9.1 Create individual project detail views
  - [ ] 9.2 Show full project information: description, tech stack, images
  - [ ] 9.3 Include links to GitHub, live demo
  - [ ] 9.4 Back button to return to Portfolio view
  - [ ] 9.5 Clean, detailed layout

### SERVICES VIEW (Separate Page)

- [ ] 10. Services View Structure
  - [ ] 10.1 Create dedicated Services view container
  - [ ] 10.2 Hidden by default, shown when Services nav clicked
  - [ ] 10.3 Large "Services" or "What I Do" heading
  - [ ] 10.4 Description of services offered
  - [ ] 10.5 Skills section with icons/grid
  - [ ] 10.6 Clean layout matching other views

### Visual Design Refinements

- [ ] 11. Enhanced Typography Implementation
  - [ ] 11.1 Test all heading sizes on actual page
  - [ ] 11.2 Adjust spacing between headings and content
  - [ ] 11.3 Ensure visual hierarchy is clear
  - [ ] 11.4 Check font weight consistency
  - [ ] 11.5 Verify line height for all text elements

- [ ] 12. Layout & Spacing Consistency
  - [ ] 12.1 Consistent max-width for all views (e.g., 1200px)
  - [ ] 12.2 Consistent padding for all sections
  - [ ] 12.3 Generous whitespace throughout
  - [ ] 12.4 Proper vertical spacing between elements
  - [ ] 12.5 Align elements consistently across views

- [ ] 13. Subtle Animations & Transitions
  - [ ] 13.1 View transition animation (fade in/out)
  - [ ] 13.2 Menu open/close animation
  - [ ] 13.3 Card hover animations
  - [ ] 13.4 Link hover effects (underline animation)
  - [ ] 13.5 Keep all animations subtle and professional

### Responsive Design

- [ ] 14. Mobile Responsiveness
  - [ ] 14.1 Hamburger menu works smoothly on mobile
  - [ ] 14.2 Hero section stacks properly on mobile
  - [ ] 14.3 Project grid becomes single column on mobile
  - [ ] 14.4 Typography scales appropriately for mobile
  - [ ] 14.5 Touch-friendly tap targets (48px minimum)
  - [ ] 14.6 Test on multiple screen sizes

- [ ] 15. Tablet Responsiveness
  - [ ] 15.1 Test layout on tablet sizes (768px-1024px)
  - [ ] 15.2 Adjust grid columns if needed
  - [ ] 15.3 Verify navigation works well
  - [ ] 15.4 Check spacing and typography

### Final Polish

- [x] 16. Clean Up & Optimization
  - [x] 16.1 Remove old single-page scrolling code
  - [x] 16.2 Remove unused CSS classes
  - [x] 16.3 Remove unused JavaScript functions
  - [x] 16.4 Optimize images (if any)
  - [x] 16.5 Test all navigation flows
  - [x] 16.6 Verify all links work correctly
  - [x] 16.7 Check for console errors
  - [x] 16.8 remove old horizontal navigation bar

- [ ] 17. Accessibility
  - [ ] 17.1 Proper ARIA labels for hamburger menu
  - [ ] 17.2 Keyboard navigation support
  - [ ] 17.3 Focus states for interactive elements
  - [ ] 17.4 Color contrast verification
  - [ ] 17.5 Screen reader testing

- [ ] 18. Cross-Browser Testing
  - [ ] 18.1 Test in Chrome
  - [ ] 18.2 Test in Firefox
  - [ ] 18.3 Test in Safari
  - [ ] 18.4 Test in Edge
  - [ ] 18.5 Fix any browser-specific issues

### Refactorings - PART 1

- [x] 19. design refactorings
  - [x] 19.1 add name 'Menu' to hamburger menu icon side of it
  - [x] 19.2 For Home View, in navigation bar remove everything except hamburger menu button
  - [x] 19.3 in home page, only name and sub summary
     - [x] 19.3.1 remove boldness to the name
  - [x] 19.4 move about summary to next page with black background and animation
  - [x] 19.5 increase the name size and put name and sub title at left bottom of page
  - [x] 19.6 the hamburger menu icon is bigger, the name 'Menu' is smaller , so make them both same size and reduce rectangle length a bit 
  - [x] 19.7 when i click on hamburger menu icon, one box comes on home page itself with white background and black text
  - [x] 19.8 Create a hamburger menu navigation overlay with the following specifications
       Layout & Structure :

       - Full-screen overlay that covers the entire viewport when activated
       - Clean, minimalist design with generous white space
       - Left-aligned navigation menu items with elegant typography
       - Include a "Contact" section positioned on the right side
       - Subtitle: "Get in touch to work together"
       - Social media links with icons:
         X (Twitter)
         LinkedIn

       Visual Design :
       - Use a light/white background color
       - Clean, modern typography with thin font weights
       - Subtle background blur or gradient effect (optional decorative element in bottom-right)
       - Smooth animations for opening/closing the overlay
       - Hover effects on menu items and social links
   - [x] 19.9 reduce the size of image in home view and remove boldness of name
   - [x] 19.10 the image at right top of page, move it to right bottom of page
   - [x] 19.11 Transform the existing about section to match the target design with enhanced content and animations.
         1. Current Content to Transform
         - FROM: "Passionate Data Scientist specializing in Machine Learning, Deep Learning, and Natural Language Processing. I transform complex data into actionable insights and build intelligent systems that solve real-world problems."
         - TO: The new format as specified below.
         2. Target Design & Content
         Main Content Structure
         - Replace the current text with:
           Hi 👋 ! I'm a Junior Data Scientist in the making, With a strong passion for building Scalable AI/ML Applications, I continuously evolve, crafting AI-powered automated solutions through code, data, and innovation.
         3. Key Visual Elements
        - Background: Dark/black background (matching current design)
        - Text Color: Light gray/white text for readability
        - Highlighted Keywords: Use colored backgrounds/badges for:
           "Scalable AI/ML Applications" - green/teal background
           "code, data, and innovation " - purple/blue background
        - Emoji: Include the waving hand emoji (👋) as shown
        - Typography: Clean, modern font with good readability
         4. Layout Requirements
        - Container: Rounded rectangular container with dark background
        - Width: Should be responsive but not too wide (similar to current)
        - Positioning: Centered on the page
        - Border Radius: Smooth rounded corners
         5. Animation Specifications
             Page Load Animation
          - Fade In + Scale: Start from opacity 0 and scale 0.8, animate to opacity 1 and scale 1
          - Duration: 800ms - 1000ms
          - Easing: Use smooth easing function (ease-out or cubic-bezier)
          - Delay: Optional 200-300ms delay after page load
             Page Exit Animation
          - Fade Out + Scale: Animate to opacity 0 and scale 0.9
          - Duration: 400-600ms
          - Trigger: When navigating away from the page


### Refactorings - PART 2

- [x] 20. Navigation Bug Fixes 
  - [x] 20.1 No navigation sections are working better (About, Portfolio, Services)
     - [x] 20.1.1 When I clicked on any section, the new blank page with white background coming on home view, then in next page about container still there as is for all sections (About, Portfolio, Services), then respective section (whatever user clicked) coming at final page.
     - [x] 20.1.2 So remove this bug and make every section unique like if we click on any section, only the respective section should come as new page.
     - [x] 20.1.3 When I clicked on any navigation button, the hero section coming on home view, then in next page respective section (whatever user clicked) coming next.
     - [x] 20.1.4 Remove this bug and make every section unique like if we click on any section, only the respective section should come as new page.
  - [x] 20.2 Transform the current single-page about section into a dynamic multi-section with color-changing backgrounds, similar to the below reference design 
       -> FROM: Single Page Design to Multi-Section Dynamic Design
       -> Multi design includes Four distinct sections with animated transitions and color-changing backgrounds.

       Section Breakdown
       Section 1: About Me (Light Beige/Off-white Background)
        - Background Color: #f5f3f0 or similar light beige
        - Layout: Split layout with text on left, profile card on right
        - Title: "About Me" (large, dark typography)
        - Left Content:
         ```
         I'm a Junior data scientist in the making, Specialized in creating scalable AI/ML applications.```
        - Right Content: Profile card with:
          Profile image (rounded)
          Name: "Samdan Shaik"
          Social media icon (X/Twitter)
          Card styling with shadow and rounded corners
       Section 2: Experience (Light Blue Background)
         - Background Color: #b8d4e3 or similar light blue shade
         - Title: "Experience" (large, dark typography)
         - Content:
         ```
         I Previously worked as a data scientist at AceEngineer, Inc. Developing AI based solutions for clients using Skills like Python, ML, DL, NLP, Data Analysis and Visualization.

         Also completed my graduation at RGUKT Srikakulam university with Computer science specialization. Where I learnt fundamentals of programming, data structures, algorithms, and software development.
         ```
       Section 3: Education (Dark Gray/Charcoal Background)
        - Background Color: #404040 or similar dark gray
        - Title: "Education" (large, white typography)
        - Content:
        ```
        Completed my Bachelors of Technology in Computer Science and Engineering at Rajiv Gandhi University of Knowledge Technologies, Srikakulam (RGUKT Srikakulam).

        Graduated with a GPA of 7.45 / 10
       Section 4: Interests (Purple/Lavender Background)
        - Background Color: #c4a5d9 or similar purple/lavender shade
        - Title: "Interests" (large, thin typography)
        - Content:
        ```
        I am interested in developing scalable AI/ML Workflows and enjoys collaborating with diverse teams to bring ideas to life. Beyond coding, I regularly read blogs on AI Trend/Updates. In my free time, I enjoy interacting with new people, exploring innovative ideas and working on projects that excites me.
        ```
       -> Technical Implementation Requirements
        Navigation System

        - Implement section-based navigation (scroll based) for colour transitions
        - Smooth transitions between sections
        - Full viewport height for each section
        - In, Education and Experience sections, add below links for college and company names respectively with underline and clickable
          - RGUKT Srikakulam (https://rguktsklm.ac.in/)
          - AceEngineer, Inc. (https://www.linkedin.com/company/aceengineer/)
 - [x] 20.3 Transform the current portfolio navigation: single-page projects display into a dynamic multi-section layout with below specifications:
        -> Create Single-Page Projects Overview
          Layout Structure
        Create a single page with 3 distinct sections for the projects:
        -> Section Layout Requirements:
        - Horizontal Separator Lines between each project section
        - Two-column layout for each project
        - Left Column: Project image
        - Right Column: Project details
        -> Right Column Content Structure:
        - Project Title (as heading)
        - Short Summary (3-4 lines maximum)
        - "View Project" Link
            - Style: Underlined text
            - Function: Clickable link to detailed project overview
        -> Detailed Project Overview Pages
          Create Individual Project Pages
          For each of the 3 projects, create a dedicated detailed overview page with:

          Page Structure (Top to Bottom):
            - Project Name
              - Style: Large heading (H1)
              - Position: Top of page
            - "View Code" Link
              - Style: Clickable underlined text
              - Function: Direct link to GitHub repository
            - Project Image
              -  Style: Full-width or centered large image
              - Position: Below the "View Code" link
            - Tech Stack Section
              - Style: Clean grid/list layout similar to the attached tech stack image
              - Include technology icons if possible
              - Position: Below project image
            - Key Features Section
              - Style: Bullet points or numbered list
              - Content: 4-5 key features/capabilities
              - Position: Below tech stack 
        -> Design Guidelines
          Visual Consistency
            - Color Scheme: Follow Script Drafter's clean aesthetic (dark backgrounds, green accents, white text)
            - Typography: Clean, modern fonts with good readability
            - Spacing: Generous white space between sections
            - Buttons/Links: Consistent styling across all interactive elements 
            - use project images path  'assets\images'
        -> Navigation Flow
          - Portfolio Page → Shows 3 project summaries
          - Click "View Project" → Navigate to detailed project overview
        -> Responsive Design Considerations
          - Ensure mobile-friendly layout
          - Stack columns vertically on smaller screens
          - Maintain readability across all devices 


### Refactorings - PART 3

- [x] 21. Services Page Enhancement
  - [x] 21.1 add below content as two categories as two containers
    - [x] 21.1.1 Put data science and programming tools first container
    - [x] 21.1.2 Put AI, ML and visualization tools second container 
      1️⃣ Programming & Development Tools
        Python
        SQL Server
        MySQL
        YAML (onfig icon)
        FastAPI
        Streamlit
        Git
        GitHub
        GitHub Actions
        VS Code
        Jupyter Notebook
        Markdown
        Microsoft Office Suite

        2️⃣ Data Science & AI

        Scikit-learn
        XGBoost
        PyTorch
        NumPy
        Pandas
        GitHub Copilot
        Claude Code
        Tableau
        Seaborn (use generic visualization icon if needed)
        Plotly
  - [x] 21.2 transform a services section skills with boxes into a well-displayed skills section with icons
      - Layout: Use a clean 3-4 column grid with consistent spacing between items.
      - Icon Format: Place official technology icons (24-32px) on the left, skill name on the right.
      - Containers: Apply subtle rounded corners, light backgrounds, and consistent padding.
      - Typography: Use clean fonts with good contrast and proper icon-to-text spacing.
      - Organization: Group similar skills together (languages, frameworks, tools).
      - Responsive: Stack into fewer columns on mobile while maintaining readability.
      - Quality: Use high-quality official brand icons and keep the design uncluttered.
      - Hover Effects: Add subtle interactions to make the section more engaging
  - [x] 21.3 enhance current serices section design  
          -> Create Multi-Section Layout
          - Break single page into distinct sections instead of one continuous flow
          - Add clear visual separators between sections
          - Use full-width sections with proper spacing 
          -> Section Organization
          - Section 1: Services ("Services" - your specialized service repeated)
          - Section 2: Hero/Introduction ("What I Do")
          - section 3: content boxes (specialized services)
          - Section 4: Tech Stack ("My TechStack")
          -> Typography & Hierarchy
            - Implement Clear Typography Scale
              - Large section headers: Use significantly larger fonts (48px+) for main section titles
              - Subheadings: Medium size (24-32px) for service categories
              - Body text: Keep current size but improve line spacing
              - Use font weights: Bold for headers, regular for body
            - Text Layout
              - Center-align section headers for impact
              - Left-align body content within containers
              - Add more white space around text blocks 
            -> Content Structure Modifications
              - "What I Do" Section (Hero)
                - Keep existing description but make it more prominent
                - Add larger, bold heading
                - Consider shorter, punchier description

             -> "Services" Section Redesign
              - create multiple boxes with the same core service but different angles:
                - Use variations like:
                  - Data-Driven Solutions - "Transform complex datasets into actionable business insights"
                  - AI-Powered Systems - "Build intelligent solutions using cutting-edge machine learning"
                  - Predictive Analytics - "Create automated workflows and predictive models"

              -> Tech Stack Section
                - Keep the grid layout of icons (it's good)
                - Add "My TechStack" as large section header
          -> Visual Design Enhancements
            - Spacing & Layout
              - Increase section padding: Much more white space between sections
              - Container width: Use consistent max-width containers (1200px max)
              - Vertical rhythm: Consistent spacing between elements 

- [x] 22. transform portfolio section project image size 
   - Target Dimensions: 1140px width × 450px height (aspect ratio 2.5:1)
   - Current Size: 660px × 240px (needs to be larger)
   - Scale Factor: Multiply both dimensions by 1.7x
   - Canvas Setup: Create new artboard at 1140px × 450px
   - Dashboard Scaling: Enlarge your dashboard interface proportionally to fill the larger canvas
   - Padding: Maintain 40-60px padding on left/right edges
   - Text & UI: Ensure all elements (buttons, text, stats) remain crisp and readable
   - Export Settings: PNG format at 2x resolution (2280px × 900px for retina displays)
   - Horizontal Expansion: Increase width from 660px to 1140px (add 480px more width)
   - Vertical Expansion: Increase height from


---

## Implementation Priority

### Phase 1: Core Structure (High Priority)
1. Hamburger menu implementation (Task 1)
2. Multi-view navigation system (Task 2)
3. Typography fixes (Task 3)

### Phase 2: Content Views (High Priority)
4. Home view restructure (Task 4, 5)
5. About view creation (Task 6)
6. Portfolio view creation (Task 7, 8)
7. Services view creation (Task 10)

### Phase 3: Polish (Medium Priority)
8. Visual refinements (Task 11, 12, 13)
9. Responsive design (Task 14, 15)

### Phase 4: Final (Low Priority)
10. Clean up and optimization (Task 16)
11. Accessibility and testing (Task 17, 18)

---

## Key Differences from Reference Site (To Be Aware Of)

1. Reference has Blog and Contact links - we're omitting these
2. Reference may use routing/framework (Next.js) - we're using view switching
3. Our implementation is simpler but achieves same visual effect
4. We'll use hash-based navigation (#home, #about, etc.) instead of real routes

---

## Notes

- All previous work on color scheme, noise texture, and basic styling is correct
- Main issues are navigation structure and typography
- Focus on getting the multi-view system working first
- Typography adjustments are critical for matching the reference
- Keep design minimal and clean throughout