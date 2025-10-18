# 📸 Screenshots Guide

This guide will help you capture the required screenshots for your Docker Compose project submission.

## 📋 Required Screenshots Checklist

- [ ] Docker Compose Build Process
- [ ] Docker Compose PS (Running Containers)
- [ ] Docker Container Logs
- [ ] Frontend Application in Browser
- [ ] Backend API Response
- [ ] Docker Desktop (Optional)

---

## 🖼️ How to Take Screenshots

### Windows

#### Method 1: Snipping Tool (Recommended)
1. Press `Windows + Shift + S`
2. Select area to capture
3. Screenshot is copied to clipboard
4. Open Paint or any image editor
5. Press `Ctrl + V` to paste
6. Save as PNG

#### Method 2: Print Screen
1. Press `PrtScn` (entire screen) or `Alt + PrtScn` (active window)
2. Open Paint
3. Press `Ctrl + V`
4. Save as PNG

#### Method 3: Snipping Tool App
1. Search for "Snipping Tool" in Start Menu
2. Click "New"
3. Select area
4. Save screenshot

### PowerShell Screenshot Commands
```powershell
# Create screenshots directory
New-Item -Path "screenshots" -ItemType Directory -Force

# Export docker-compose ps output
docker-compose ps | Out-File -FilePath "screenshots/docker-ps.txt"

# Export logs
docker-compose logs | Out-File -FilePath "screenshots/docker-logs.txt"

# Export images list
docker images | Out-File -FilePath "screenshots/docker-images.txt"
```

---

## 📸 Screenshot Instructions

### 1. Docker Compose Build Screenshot

**What to capture**: The build process output

**Steps**:
```powershell
# Stop current containers
docker-compose down

# Start build and capture output
docker-compose up --build
```

**What to show**:
- Building backend and frontend images
- "Successfully built" messages
- Container creation
- Containers starting

**Filename**: `screenshots/01-docker-compose-build.png`

---

### 2. Docker Compose PS Screenshot

**What to capture**: Running containers status

**Steps**:
```powershell
# Show running containers
docker-compose ps
```

**What to show**:
- Container names (task-manager-backend, task-manager-frontend)
- Status: "Up" and "healthy"
- Ports: 3000:3000 and 8080:80
- Service names

**Filename**: `screenshots/02-docker-compose-ps.png`

**Example output**:
```
NAME                    STATUS                  PORTS
task-manager-backend    Up (healthy)           0.0.0.0:3000->3000/tcp
task-manager-frontend   Up (healthy)           0.0.0.0:8080->80/tcp
```

---

### 3. Docker Container Logs Screenshot

**What to capture**: Container logs showing services running

**Steps**:
```powershell
# View logs
docker-compose logs

# Or view specific service
docker-compose logs backend
```

**What to show**:
- Backend log: "✅ Backend server running on port 3000"
- No error messages
- Timestamp information

**Filename**: `screenshots/03-docker-logs.png`

---

### 4. Frontend Application Screenshot

**What to capture**: The web application in browser

**Steps**:
1. Open browser (Chrome, Firefox, Edge)
2. Navigate to `http://localhost:8080`
3. Interact with the app (add some tasks)
4. Take screenshot

**What to show**:
- Full browser window
- URL bar showing `localhost:8080`
- Application interface with Task Manager
- Status indicator showing "Connected to backend"
- Some tasks in the list

**Filename**: `screenshots/04-frontend-app.png`

**Tips**:
- Add 2-3 tasks to show functionality
- Make sure the page is fully loaded
- Show the beautiful UI

---

### 5. Backend API Response Screenshot

**What to capture**: API endpoint working

**Option A: Using Browser**
1. Open browser
2. Navigate to `http://localhost:3000/api/tasks`
3. Take screenshot showing JSON response

**Option B: Using PowerShell**
```powershell
# Get API response
curl http://localhost:3000/api/tasks
```

**Option C: Using Postman**
1. Download [Postman](https://www.postman.com/downloads/)
2. Create GET request to `http://localhost:3000/api/tasks`
3. Click Send
4. Take screenshot showing response

**What to show**:
- URL: `http://localhost:3000/api/tasks`
- Status: 200 OK
- JSON response with tasks array
- Response headers (optional)

**Filename**: `screenshots/05-api-response.png`

---

### 6. Docker Desktop Screenshot (Optional)

**What to capture**: Docker Desktop showing containers

**Steps**:
1. Open Docker Desktop application
2. Click on "Containers" in sidebar
3. Show both containers running
4. Take screenshot

**What to show**:
- Both containers in "Running" state
- Green status indicators
- Container names
- Port mappings

**Filename**: `screenshots/06-docker-desktop.png`

---

### 7. Additional Screenshots (Optional but Impressive)

#### Browser DevTools Network Tab
1. Open http://localhost:8080
2. Press `F12` to open DevTools
3. Click "Network" tab
4. Interact with app (add/delete tasks)
5. Show API calls being made

**Filename**: `screenshots/07-network-calls.png`

#### Docker Images List
```powershell
docker images
```
Show the built images with sizes and tags.

**Filename**: `screenshots/08-docker-images.png`

#### Docker Networks
```powershell
docker network ls
```
Show the created network.

**Filename**: `screenshots/09-docker-networks.png`

---

## 📁 Organizing Screenshots

Create this folder structure:

```
docker_ComposeProject/
├── screenshots/
│   ├── 01-docker-compose-build.png
│   ├── 02-docker-compose-ps.png
│   ├── 03-docker-logs.png
│   ├── 04-frontend-app.png
│   ├── 05-api-response.png
│   ├── 06-docker-desktop.png (optional)
│   ├── 07-network-calls.png (optional)
│   └── README.md (description of each screenshot)
```

### Create Screenshots README

Create `screenshots/README.md`:

```markdown
# Screenshots

## 1. Docker Compose Build
Shows the build process of both frontend and backend services.

## 2. Docker Compose PS
Shows both containers running and healthy.

## 3. Docker Logs
Shows the backend server running successfully on port 3000.

## 4. Frontend Application
Shows the Task Manager web interface with tasks.

## 5. API Response
Shows the backend API responding with tasks data.

## 6. Docker Desktop
Shows containers running in Docker Desktop.
```

---

## 🔄 Quick Screenshot Workflow

Run these commands in sequence and take screenshots:

```powershell
# 1. Clean start
docker-compose down
Clear-Host

# 2. Build and capture
docker-compose up --build
# Take screenshot of build output

# 3. Open new terminal and check status
docker-compose ps
# Take screenshot

# 4. View logs
docker-compose logs backend
# Take screenshot

# 5. Open browser
Start-Process "http://localhost:8080"
# Take screenshot of app

# 6. Test API
Start-Process "http://localhost:3000/api/tasks"
# Take screenshot of JSON response
```

---

## 🎨 Screenshot Best Practices

### DO ✅
- Use high resolution (1920x1080 or higher)
- Capture relevant information only
- Use PNG format for better quality
- Include timestamps when visible
- Show successful states (green indicators)
- Make sure text is readable
- Add tasks to show functionality

### DON'T ❌
- Use low resolution images
- Capture personal information
- Include unrelated windows
- Use blurry or dark screenshots
- Crop important information
- Use JPG for text-heavy images

---

## 📤 Adding Screenshots to GitHub

### Method 1: Using Git Commands

```bash
# Create screenshots directory
mkdir screenshots

# Add your screenshot files to this folder
# Then commit

git add screenshots/
git commit -m "Add project screenshots"
git push
```

### Method 2: Using GitHub Web Interface

1. Go to your repository on GitHub
2. Click "Add file" → "Upload files"
3. Drag and drop your screenshots
4. Commit changes

### Method 3: Update README with Screenshots

Edit your README.md on GitHub:

```markdown
## 📸 Project Screenshots

### Docker Compose Running
![Docker PS](screenshots/02-docker-compose-ps.png)

### Application Interface
![Frontend App](screenshots/04-frontend-app.png)

### API Response
![API](screenshots/05-api-response.png)
```

---

## 🎬 Video Alternative (Bonus)

Instead of screenshots, you can record a short video:

### Windows Game Bar
1. Press `Windows + G`
2. Click record button
3. Show the entire workflow
4. Save and upload to YouTube
5. Add link to README

### Steps to show in video:
1. Run `docker-compose up --build`
2. Show `docker-compose ps`
3. Open browser to localhost:8080
4. Add/complete/delete tasks
5. Show API endpoint
6. Show Docker Desktop

---

## 📋 Screenshot Checklist for Submission

Before submitting, verify you have:

- [ ] Created `screenshots/` directory
- [ ] Taken all required screenshots
- [ ] Named files properly (01-..., 02-..., etc.)
- [ ] Screenshots are clear and readable
- [ ] Added screenshots to git repository
- [ ] Pushed to GitHub
- [ ] Updated README.md with screenshot links (optional)
- [ ] Verified images display on GitHub

---

## 🤔 Troubleshooting

### Screenshot too large?
```powershell
# Use Windows built-in image resize or online tools
# Recommended max size: 2MB per image
```

### Can't see full terminal output?
```powershell
# Increase terminal buffer size
# Right-click terminal title bar → Properties → Layout
# Set Screen Buffer Size Height to 999
```

### Text too small in screenshot?
- Use Windows Magnifier: `Windows + +`
- Or increase terminal font size before capturing

---

## 📚 Additional Tools

### Screenshot Tools
- **ShareX** (Free, advanced) - https://getsharex.com/
- **Greenshot** (Free, simple) - https://getgreenshot.org/
- **Lightshot** (Free, easy) - https://app.prntscr.com/

### Screen Recording
- **OBS Studio** (Free) - https://obsproject.com/
- **ShareX** (Also does video)
- Windows Game Bar (Built-in)

---

**Good luck with your screenshots! 📸✨**

