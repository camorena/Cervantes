#!/bin/bash

# Create a directory for the images
mkdir -p public/images

# Download hero image
curl "https://placehold.co/1200x600/e2e8f0/4f46e5?text=Hero+Image+1200x600" --output public/images/hero.png

# Download service images
curl "https://placehold.co/600x400/e2e8f0/4f46e5?text=Interior+Painting+600x400" --output public/images/service-painting.png
curl "https://placehold.co/600x400/e2e8f0/4f46e5?text=Drywall+Installation+600x400" --output public/images/service-drywall.png
curl "https://placehold.co/600x400/e2e8f0/4f46e5?text=Texture+Application+600x400" --output public/images/service-texture.png
curl "https://placehold.co/600x400/e2e8f0/4f46e5?text=Drywall+Repair+600x400" --output public/images/service-repair.png
curl "https://placehold.co/600x400/e2e8f0/4f46e5?text=Ceiling+Work+600x400" --output public/images/service-ceiling.png
curl "https://placehold.co/600x400/e2e8f0/4f46e5?text=Custom+Finishes+600x400" --output public/images/service-finishes.png

# Download project images
curl "https://placehold.co/800x600/e2e8f0/4f46e5?text=Living+Room+Project+800x600" --output public/images/project-livingroom.png
curl "https://placehold.co/800x600/e2e8f0/4f46e5?text=Ceiling+Project+800x600" --output public/images/project-ceiling.png
curl "https://placehold.co/800x600/e2e8f0/4f46e5?text=Office+Project+800x600" --output public/images/project-office.png
curl "https://placehold.co/800x600/e2e8f0/4f46e5?text=Bedroom+Project+800x600" --output public/images/project-bedroom.png

# Download founder image
curl "https://placehold.co/600x750/e2e8f0/4f46e5?text=Humberto+Cervantes+Founder+600x750" --output public/images/founder.png

echo "All images downloaded successfully!"