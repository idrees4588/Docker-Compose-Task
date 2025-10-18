# ⚡ Quick Start Guide

Get the application running in under 2 minutes!

## 🚀 Steps

### 1. Verify Docker is Installed
```powershell
docker --version
docker-compose --version
```

### 2. Start the Application
```powershell
# Build and start all services
docker-compose up --build -d
```

### 3. Verify It's Running
```powershell
# Check container status
docker-compose ps
```

You should see:
```
NAME                    STATUS              PORTS
task-manager-backend    Up (healthy)        0.0.0.0:3000->3000/tcp
task-manager-frontend   Up (healthy)        0.0.0.0:8080->80/tcp
```

### 4. Access the Application

Open your browser:
- **Frontend**: http://localhost:8080
- **Backend API**: http://localhost:3000/api/tasks

### 5. Test It Works

Add some tasks in the web interface and watch them appear!

## 🛑 Stop the Application

```powershell
docker-compose down
```

## 📊 View Logs

```powershell
# All services
docker-compose logs

# Specific service
docker-compose logs backend
docker-compose logs frontend

# Follow logs (live)
docker-compose logs -f
```

## 🔧 Troubleshooting

### Port Already in Use?
```powershell
# Stop all containers
docker-compose down

# Find and kill process using port 3000
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Restart
docker-compose up -d
```

### Can't Connect to Backend?
```powershell
# Check if backend is running
docker-compose ps

# View backend logs
docker-compose logs backend

# Test backend directly
curl http://localhost:3000/
```

### Need to Rebuild?
```powershell
# Rebuild without cache
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

## 📸 Take Screenshots

See `SCREENSHOTS_GUIDE.md` for detailed instructions.

Quick commands:
```powershell
# 1. Show running containers
docker-compose ps

# 2. Show logs
docker-compose logs backend

# 3. Open app in browser
Start-Process "http://localhost:8080"

# 4. Test API
Start-Process "http://localhost:3000/api/tasks"
```

## 🐙 Push to GitHub

```bash
# Initialize git (if not done)
git init

# Add files
git add .

# Commit
git commit -m "Initial commit: Docker Compose Task Manager"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/docker-compose-task-manager.git

# Push
git branch -M main
git push -u origin main
```

## ✅ Submission Checklist

- [ ] Application runs successfully
- [ ] Both containers are healthy
- [ ] Frontend accessible at localhost:8080
- [ ] Backend API responds at localhost:3000
- [ ] Screenshots taken and added to `screenshots/` folder
- [ ] Code pushed to GitHub
- [ ] README.md includes your GitHub username
- [ ] Repository is public

---

**That's it! You're done! 🎉**

For detailed information, see the main `README.md` file.

