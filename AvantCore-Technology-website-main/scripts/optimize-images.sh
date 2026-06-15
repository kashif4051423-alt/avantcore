#!/bin/bash

# Image Optimization Script
# Converts all images in public folder to WebP format with proper compression
# Requires: cwebp, imagemagick (convert)

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Directories
PUBLIC_DIR="./public"
BACKUP_DIR="./public-backup"
LOG_FILE="./image-optimization.log"

# Image quality settings
HERO_QUALITY=75       # Hero images: 75% quality
BANNER_QUALITY=70     # Banner/background images: 70%
CARD_QUALITY=70       # Card images: 70%
TEAM_QUALITY=65       # Team/events photos: 65%
LOGO_QUALITY=75       # Logos: 75%
DEFAULT_QUALITY=70    # Default: 70%

echo "========================================" | tee -a "$LOG_FILE"
echo "IMAGE OPTIMIZATION SCRIPT" | tee -a "$LOG_FILE"
echo "========================================" | tee -a "$LOG_FILE"
echo "Start time: $(date)" | tee -a "$LOG_FILE"
echo "" | tee -a "$LOG_FILE"

# Check if cwebp is installed
if ! command -v cwebp &> /dev/null; then
    echo -e "${RED}Error: cwebp is not installed.${NC}" | tee -a "$LOG_FILE"
    echo "Install with: brew install webp (macOS) or apt-get install webp (Linux)" | tee -a "$LOG_FILE"
    exit 1
fi

# Create backup
if [ ! -d "$BACKUP_DIR" ]; then
    echo -e "${YELLOW}Creating backup...${NC}" | tee -a "$LOG_FILE"
    cp -r "$PUBLIC_DIR" "$BACKUP_DIR"
    echo -e "${GREEN}Backup created at $BACKUP_DIR${NC}" | tee -a "$LOG_FILE"
fi

# Function to convert image
convert_image() {
    local source="$1"
    local quality="$2"
    local destination="${source%.*}.webp"
    
    if [ -f "$source" ]; then
        local file_size=$(stat -f%z "$source" 2>/dev/null || stat -c%s "$source" 2>/dev/null)
        local file_size_kb=$((file_size / 1024))
        
        echo -n "Converting $(basename "$source") ($file_size_kb KB)... "
        
        if cwebp -q "$quality" "$source" -o "$destination" 2>/dev/null; then
            local new_size=$(stat -f%z "$destination" 2>/dev/null || stat -c%s "$destination" 2>/dev/null)
            local new_size_kb=$((new_size / 1024))
            local reduction=$((100 - (new_size_kb * 100 / file_size_kb)))
            
            echo -e "${GREEN}✓ Done${NC} ($new_size_kb KB, ${reduction}% reduction)" | tee -a "$LOG_FILE"
            return 0
        else
            echo -e "${RED}✗ Failed${NC}" | tee -a "$LOG_FILE"
            return 1
        fi
    fi
}

# Function to rename file (remove URL encoding and special chars)
rename_file() {
    local file="$1"
    local quality="$2"
    
    # Skip if already webp
    if [[ "$file" == *.webp ]]; then
        return 0
    fi
    
    convert_image "$file" "$quality"
}

# Priority 1: Hero Images
echo -e "${YELLOW}=== Priority 1: Hero Images (75% quality) ===${NC}" | tee -a "$LOG_FILE"
for file in "$PUBLIC_DIR"/"{saleanddistribution,hrms,inventory}.jpg"; do
    [ -f "$file" ] && rename_file "$file" "$HERO_QUALITY"
done

# Priority 2: Banner Images (70% quality)
echo -e "${YELLOW}=== Priority 2: Banner Images (70% quality) ===${NC}" | tee -a "$LOG_FILE"
for file in "$PUBLIC_DIR"/*.{jfif,jpg}; do
    [ -f "$file" ] && ! [[ "$file" == *"saleanddistribution"* ]] && \
    ! [[ "$file" == *"hrms"* ]] && ! [[ "$file" == *"inventory"* ]] && \
    rename_file "$file" "$BANNER_QUALITY"
done

# Priority 3: Team/Events Images (65% quality)
echo -e "${YELLOW}=== Priority 3: Team/Events Images (65% quality) ===${NC}" | tee -a "$LOG_FILE"
for file in "$PUBLIC_DIR"/newsandevents/*.{jpg,png,jpeg}; do
    [ -f "$file" ] && rename_file "$file" "$TEAM_QUALITY"
done

# Priority 4: PNG Files (70% quality)
echo -e "${YELLOW}=== Priority 4: Logo/Tech Images (70% quality) ===${NC}" | tee -a "$LOG_FILE"
for file in "$PUBLIC_DIR"/*.png; do
    [ -f "$file" ] && rename_file "$file" "$LOGO_QUALITY"
done

# Priority 5: Career Images
echo -e "${YELLOW}=== Priority 5: Career Images (65% quality) ===${NC}" | tee -a "$LOG_FILE"
for file in "$PUBLIC_DIR"/career/*.{jpg,jpeg,png}; do
    [ -f "$file" ] && rename_file "$file" "$TEAM_QUALITY"
done

# Calculate total savings
echo "" | tee -a "$LOG_FILE"
echo -e "${YELLOW}=== Optimization Summary ===${NC}" | tee -a "$LOG_FILE"

original_size=0
optimized_size=0

for file in "$PUBLIC_DIR"/*.{jpg,jpeg,png,jfif} "$PUBLIC_DIR"/**/*.{jpg,jpeg,png,jfif} 2>/dev/null; do
    [ -f "$file" ] && original_size=$((original_size + $(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)))
done

for file in "$PUBLIC_DIR"/*.webp "$PUBLIC_DIR"/**/*.webp 2>/dev/null; do
    [ -f "$file" ] && optimized_size=$((optimized_size + $(stat -f%z "$file" 2>/dev/null || stat -c%s "$file" 2>/dev/null)))
done

original_mb=$((original_size / 1024 / 1024))
optimized_mb=$((optimized_size / 1024 / 1024))
total_reduction=$((100 - (optimized_mb * 100 / original_mb)))

echo "Original images: ${original_mb}MB" | tee -a "$LOG_FILE"
echo "WebP images: ${optimized_mb}MB" | tee -a "$LOG_FILE"
echo "Total reduction: ${total_reduction}%" | tee -a "$LOG_FILE"

echo "" | tee -a "$LOG_FILE"
echo -e "${GREEN}Optimization complete!${NC}" | tee -a "$LOG_FILE"
echo "End time: $(date)" | tee -a "$LOG_FILE"
echo "" | tee -a "$LOG_FILE"
echo "Next steps:" | tee -a "$LOG_FILE"
echo "1. Review the optimized images visually" | tee -a "$LOG_FILE"
echo "2. Update image paths in code (old extensions to .webp)" | tee -a "$LOG_FILE"
echo "3. Test on different browsers for WebP support" | tee -a "$LOG_FILE"
echo "4. Keep backup at: $BACKUP_DIR" | tee -a "$LOG_FILE"
