# Screenshots Directory

This directory contains screenshots demonstrating the Docker Compose project in action.

## 📸 Screenshot Descriptions

### 01-docker-compose-build.png
Shows the Docker Compose build process:
- Building backend Node.js image
- Building frontend Nginx image
- Creating network
- Starting containers

### 02-docker-compose-ps.png
Shows running containers status:
- Container names and IDs
- Health status (healthy)
- Port mappings (3000:3000, 8080:80)
- Service status (Up)

### 03-docker-logs.png
Shows container logs:
- Backend server startup message
- Port confirmation
- No error messages

### 04-frontend-app.png
Shows the Task Manager web application:
- Modern UI design
- Task list with sample tasks
- Backend connection status
- Add task functionality

### 05-api-response.png
Shows backend API response:
- GET /api/tasks endpoint
- JSON response with tasks array
- HTTP 200 status
- CORS headers

### 06-docker-desktop.png (Optional)
Shows Docker Desktop interface:
- Both containers running
- Green status indicators
- Resource usage
- Port mappings

## 📝 How to Add Screenshots

1. Take screenshots following the guide in `SCREENSHOTS_GUIDE.md`
2. Save them in this directory with the naming convention above
3. Ensure images are clear and readable
4. Commit and push to GitHub

## 🔍 Quick Commands to Capture

```powershell
# View running containers
docker-compose ps

# View logs
docker-compose logs

# View images
docker images | Select-String "docker_composeproject"

# Test API
curl http://localhost:3000/api/tasks
```

## 📤 Uploading to GitHub

After taking screenshots:

```bash
git add screenshots/
git commit -m "Add project screenshots"
git push
```

---

**Note**: Make sure screenshots don't contain any sensitive information before uploading to GitHub.

